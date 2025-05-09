import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { toast } from 'sonner';
import { documents, oppositePartyMembers, partyMembers, sampleCase } from '@/services/master-data/mockData';


const DocumentView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const document = documents.find(doc => doc.id === id);
  
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      toast.success("Document deleted successfully");
      navigate('/');
    }
  };
  
  const handleEdit = () => {
    navigate(`/document-generation/edit/${id}`);
  };
  
  if (!document) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/document-generation')} className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back
          </Button>
        </div>
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold">Document not found</h2>
          <p className="mt-2">The document you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/document-generation')} className="mt-4">
            Return to Document List
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center py-2 px-4 border-b">
        <h2 className="text-2xl font-bold text-gray-800">View Case Document</h2>
        <Button 
          variant="outline" 
          onClick={() => navigate('/document-generation')} 
          className="flex items-center gap-2"
        >
          Back
        </Button>
      </div>

      {/* Case Details Section */}
      <Card className="mb-6 overflow-hidden">
        <div className="text-black px-6 py-3">
          <h2 className="text-lg font-medium">Case Details</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Court/Tribunal: </span>
                <span>{sampleCase.court}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Case No.: </span>
                <span>{sampleCase.caseNo}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Case Type: </span>
                <span>{sampleCase.caseType}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Year: </span>
                <span>{new Date().getFullYear()}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Date of Filing: </span>
                <span>{sampleCase.dateOfFiling}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Judge Name: </span>
                <span>{sampleCase.judgeName}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Client Name: </span>
                <span>{sampleCase.clientName}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Court Room No.: </span>
                <span>{sampleCase.courtRoomNo}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Under Acts: </span>
                <span>{sampleCase.underActs}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Under Section: </span>
                <span>{sampleCase.judgeSection}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">FIR Police Station: </span>
                <span>{sampleCase.firPoliceStation}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">FIR No.: </span>
                <span>{sampleCase.firNo}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Your Party: </span>
                <span>{sampleCase.yourParty}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Stage: </span>
                <span>{sampleCase.stage}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md col-span-2">
              <div className="text-sm">
                <span className="font-medium text-gray-500">Opposite Party Advocates: </span>
                <span>{sampleCase.oppositePartyAdvocates}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Party Members Section */}
      <Card className="mb-6 overflow-hidden">
        <div className="text-black px-6 py-3">
          <h2 className="text-lg font-medium">Party Member Details</h2>
        </div>
        <div className="p-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone No.</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {partyMembers.map((member, index) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.phoneNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Opposite Party Members Section */}
      <Card className="mb-6 overflow-hidden">
        <div className="text-black px-6 py-3">
          <h2 className="text-lg font-medium">Opposite Party Member Details</h2>
        </div>
        <div className="p-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone No.</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {oppositePartyMembers.map((member, index) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.phoneNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Document Details Section */}
      <Card className="mb-6 overflow-hidden">
        <div className="text-black px-6 py-3">
          <h2 className="text-lg font-medium">Document Details</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Deponent Verification</h3>
            <div className="bg-white p-3 rounded-md border min-h-[100px]">
              {document.deponentVerification || `I, ${document.clientName}, do hereby verify that the contents of the above affidavit are true and correct to the best of my knowledge and belief. Nothing material has been concealed therefrom.`}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Facts</h3>
            <div className="bg-white p-3 rounded-md border min-h-[150px]">
              {document.facts || 'Case facts will be displayed here.'}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Grounds</h3>
            <div className="bg-white p-3 rounded-md border min-h-[150px]">
              {document.grounds || 'Case grounds will be displayed here.'}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Main Prayer</h3>
            <div className="bg-white p-3 rounded-md border min-h-[150px]">
              {document.mainPrayer || 'Main prayer details will be displayed here.'}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Interim Prayer</h3>
            <div className="bg-white p-3 rounded-md border min-h-[150px]">
              {document.interimPrayer || 'Interim prayer details will be displayed here.'}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DocumentView;