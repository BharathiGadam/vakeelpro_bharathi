import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

// Mock data for the table
const mockData = [
  { clientName: 'Rajesh Kumar', aadhaar: '1234-5678-9012', phone: '9876543210', caseNo: 'HC/2024/123', duplicates: 'Duplicate found: Client already has 1 document(s)' },
  { clientName: 'Rameesh Sharma', aadhaar: '2345-6789-0123', phone: '8765432109', caseNo: 'SC/2023/567', duplicates: 'Duplicate found: Client already has 1 document(s)' },
  { clientName: 'Sunita Devi', aadhaar: '3456-7890-1234', phone: '7654321098', caseNo: 'DC/2024/876', duplicates: 'Duplicate found: Client already has 1 document(s)' },
];

const DocumentSearchCase = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (client) => {
    navigate('/document/new', { state: { client } });
  };

  const filteredData = mockData.filter(item => {
    const search = searchTerm.toLowerCase().trim();
    return (
      item.clientName.toLowerCase().includes(search) ||
      item.aadhaar.toLowerCase().includes(search) ||
      item.phone.toLowerCase().includes(search) ||
      item.caseNo.toLowerCase().includes(search)
    );
  });

  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Search Client</CardTitle>
        <CardDescription>
          Find a client to generate documents for their case
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search by Name, Aadhaar, Phone or Case No..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-2/3 border border-gray-300"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>

        <div className="overflow-x-auto">
          {filteredData.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No Result Found
            </div>
          ) : (
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Client Name</th>
                  <th className="border px-4 py-2 text-left">Aadhaar</th>
                  <th className="border px-4 py-2 text-left">Phone</th>
                  <th className="border px-4 py-2 text-left">Case No.</th>
                  <th className="border px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{item.clientName}</td>
                    <td className="border px-4 py-2">{item.aadhaar}</td>
                    <td className="border px-4 py-2">{item.phone}</td>
                    <td className="border px-4 py-2">{item.caseNo}</td>
                    <td className="border px-4 py-2">
                      <Button
                        onClick={() => handleSelect(item)}
                        className="bg-[#183568] hover:bg-blue-900 text-white px-4"
                      >
                        Select
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentSearchCase;