import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Clock, Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatusBadge from '../ui/StatusBadge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

import { toast } from 'sonner';
import { Document } from '@/services/master-data';
import { documents as initialDocuments } from '@/services/master-data/mockData';

const DocumentList = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  // Reset currentPage to 1 whenever searchTerm or itemsPerPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, itemsPerPage]);

  // Filter documents based on search term
  const filteredDocuments = documents.filter(doc => {
    const search = searchTerm.trim().toLowerCase();
    return (
      doc.clientName.toLowerCase().includes(search) ||
      doc.caseNo.toLowerCase().includes(search)
    );
  });
  
  // Pagination
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);
  
  // Handle delete document
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      setDocuments(prevDocs => prevDocs.filter(doc => doc.id !== id));
      toast.success("Document deleted successfully");
    }
  };

  // Handle view document
  const handleViewDocument = (id: string) => {
    navigate(`/document-generation/${id}`);
  };

  // Handle edit document
  const handleEditDocument = (id: string) => {
    navigate(`/document-generation/edit/${id}`);
  };

  // Handle timeline view
  const handleTimelineView = (id: string) => {
    navigate(`/document-generation/time-line/${id}`);
  };


  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  return (
    <div className="bg-white shadow-sm rounded-lg border p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Generated Documents</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Client Name or Case No..."
              className="px-4 py-2 pr-10 border rounded-md w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 top-2.5">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <Button
            onClick={() => navigate('/document-generation/create')}
            className="bg-blue-800 hover:bg-blue-900 text-white"
          >
            Add New
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">S.No.</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Client Name</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Document Type</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Court</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Case No.</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Case Type</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Advocate</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Date of Filing</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Document Status</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedDocuments.map((doc: Document, index) => (
              <TableRow key={doc.id} className="hover:bg-gray-50 border-b">
                <TableCell className="py-3 px-4">{startIndex + index + 1}</TableCell>
                <TableCell className="py-3 px-4">{doc.clientName}</TableCell>
                <TableCell className="py-3 px-4">{doc.documentType}</TableCell>
                <TableCell className="py-3 px-4">{doc.court}</TableCell>
                <TableCell className="py-3 px-4">{doc.caseNo}</TableCell>
                <TableCell className="py-3 px-4">{doc.caseType}</TableCell>
                <TableCell className="py-3 px-4">{doc.advocate}</TableCell>
                <TableCell className="py-3 px-4">{doc.filingDate}</TableCell>
                <TableCell className="py-3 px-4 list-none">
                  <StatusBadge status={doc.docStatus} />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleViewDocument(doc.id)}
                      className="text-gray-600 hover:text-blue-600"
                      title="View"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      onClick={() => handleEditDocument(doc.id)}
                      className="text-gray-600 hover:text-blue-600"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleTimelineView(doc.id)}
                      className="text-gray-600 hover:text-blue-600"
                      title="Timeline"
                    >
                      <Clock size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(doc.id)}
                      className="text-gray-600 hover:text-red-600"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            
            {filteredDocuments.length === 0 && (
              <TableRow>
                <TableCell colSpan={10} className="text-center py-4 text-gray-500">
                  No documents found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination */}
      {filteredDocuments.length > 0 && (
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

export default DocumentList;