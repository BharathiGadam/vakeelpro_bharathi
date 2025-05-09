import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { lawFirmsMockData } from "@/services/master-data/mockData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";
import { LawFirm } from "@/types/lawFirm";
import { Switch } from "../ui/switch";
import { CheckCircle2, Edit, Eye, Trash2, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

const LawFirmList = () => {
  const navigate = useNavigate();
  const [lawFirms, setLawFirms] = useState(lawFirmsMockData);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  
  const total = lawFirmsMockData.length;
  const totalPages = Math.ceil(total / itemsPerPage);

  const handleToggleStatus = (id: string, currentStatus: boolean) => {
    setLawFirms(prevFirms =>
      prevFirms.map(firm =>
        firm.id === id ? { ...firm, isActive: !currentStatus } : firm
      )
    );
    toast({
      title: "Status Updated",
      description: `Law firm ${currentStatus ? 'deactivated' : 'activated'} successfully`,
    });
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const confirmDelete = () => {
    if (deleteId) {
      setLawFirms(prevFirms => prevFirms.filter(firm => firm.id !== deleteId));
      toast({
        title: "Law Firm Deleted",
        description: "The law firm has been deleted successfully",
      });
      setDeleteId(null);
    }
  };

  const handleView = (id: string) => {
    navigate(`/law-firms/view/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/law-firms/edit/${id}`);
  };

  // Calculate the firms to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFirms = lawFirms.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">S.No</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Firm Email</TableHead>
              <TableHead>Firm Contact</TableHead>
              <TableHead>Admin Name</TableHead>
              <TableHead>Admin Contact</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array(5).fill(0).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-6 w-[50px]" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-[180px]" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-[200px]" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-[200px]" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-[120px]" /></TableCell>
                </TableRow>
              ))
            ) : lawFirms.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8">
                  No law firms found
                </TableCell>
              </TableRow>
            ) : (
              currentFirms.map((firm: LawFirm, index: number) => (
                <TableRow key={firm.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell className="font-medium">{firm.name}</TableCell>
                  <TableCell>{firm.adminEmail}</TableCell>
                  <TableCell>{firm.primaryContactNumber}</TableCell>
                  <TableCell>{firm.adminName}</TableCell>
                  <TableCell>{firm.adminPhone}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{firm.officeAddress}</span>
                      <span className="text-xs text-muted-foreground">
                        {firm.city}, {firm.state}, {firm.zipCode}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center">
                        {firm.isActive ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500 mr-1" />
                        )}
                        <span className={firm.isActive ? "text-green-600" : "text-red-600"}>
                          {firm.isActive ? "Active" : "Inactive"}
                        </span>
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" onClick={() => handleView(firm.id)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(firm.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this law firm? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => {
                              setDeleteId(firm.id);
                              confirmDelete();
                            }} className="bg-red-600 hover:bg-red-700">
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {!loading && lawFirms.length > 0 && (
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Show</span>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="border rounded-md px-2 py-1"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-md border disabled:opacity-50 hover:bg-gray-100"
            >
              &lt;
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + Math.max(1, Math.min(currentPage - 2, totalPages - 4));
              if (pageNum <= totalPages) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md border ${
                      currentPage === pageNum ? 'text-white' : 'hover:bg-gray-100'
                    }`}
                    style={{ backgroundColor: currentPage === pageNum ? '#183568' : '' }}
                  >
                    {pageNum}
                  </button>
                );
              }
              return null;
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-md border disabled:opacity-50 hover:bg-gray-100"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LawFirmList;