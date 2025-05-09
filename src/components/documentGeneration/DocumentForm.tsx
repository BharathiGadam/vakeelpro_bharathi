import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { attachments, documents, documentTemplates, oppositePartyMembers, partyMembers, sampleCase } from '@/services/master-data/mockData';
import { DocumentForm as DocumentFormType } from '@/services/master-data';

const DocumentForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<DocumentFormType>({
    documentTemplate: '',
    deponentVerification: '',
    facts: '',
    grounds: '',
    mainPrayer: '',
    interimPrayer: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a new document object with the form data
    const newDocument = {
      id: String(documents.length + 1), // Simple ID generation for mock data
      clientName: sampleCase.clientName,
      documentType: formData.documentTemplate,
      court: sampleCase.court,
      caseNo: sampleCase.caseNo,
      caseType: sampleCase.caseType,
      advocate: sampleCase.oppositePartyAdvocates.split(',')[0] || 'Unknown Advocate', // Take first advocate for simplicity
      filingDate: sampleCase.dateOfFiling,
      status: "Draft" as const, // Explicitly set to a valid literal
      docStatus: "Draft" as const, // Explicitly set to a valid literal
      caseStage: sampleCase.stage,
      hearingDate: 'TBD', // Placeholder since not provided
      deponentVerification: formData.deponentVerification,
      facts: formData.facts,
      grounds: formData.grounds,
      mainPrayer: formData.mainPrayer,
      interimPrayer: formData.interimPrayer
    };

    // Update the documents array (simulating a save operation)
    documents.push(newDocument);
    
    // Navigate back to the document list
    navigate('/');
  };

  // Add check for edit mode using URL parameters
  const isEditMode = window.location.pathname.includes('/edit');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          {isEditMode ? 'Edit Case Document' : 'Add Case Document'}
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
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
          <div className="p-6 overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {oppositePartyMembers.map((member, index) => (
                  <tr key={member.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.phoneNo}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{member.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Attachments Section */}
        <Card className="mb-6 overflow-hidden">
          <div className="text-black px-6 py-3">
            <h2 className="text-lg font-medium">Attachments</h2>
          </div>
          <div className="p-6">
            {attachments.map((attachment) => (
              <div key={attachment.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md mb-2">
                <span className="text-sm">{attachment.fileName}</span>
                <div className="flex space-x-2">
                  <a href={attachment.url} download className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                  <button className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Document Details Section */}
        <Card className="mb-6 overflow-hidden">
          <div className="text-black px-6 py-3">
            <h2 className="text-lg font-medium">Document Details</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="form-group">
              <label htmlFor="documentTemplate" className="form-label">Document Template <span className="text-red-500">*</span></label>
              <div className="flex items-center gap-2">
                <select
                  id="documentTemplate"
                  name="documentTemplate"
                  className="form-control"
                  required
                  value={formData.documentTemplate}
                  onChange={handleChange}
                >
                  <option value="">Select Template</option>
                  {documentTemplates.map(template => (
                    <option key={template} value={template}>
                      {template}
                    </option>
                  ))}
                </select>
                <button type="button" className="p-2 bg-red-100 rounded-md text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="deponentVerification" className="form-label">Deponent Verification <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="deponentVerification"
                name="deponentVerification"
                className="form-control"
                placeholder="Enter Name"
                required
                value={formData.deponentVerification}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="facts" className="form-label">Facts <span className="text-red-500">*</span></label>
              <textarea
                id="facts"
                name="facts"
                rows={4}
                className="form-control"
                placeholder="Enter Here"
                required
                value={formData.facts}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="grounds" className="form-label">Grounds <span className="text-red-500">*</span></label>
              <textarea
                id="grounds"
                name="grounds"
                rows={4}
                className="form-control"
                placeholder="Enter Here"
                required
                value={formData.grounds}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="mainPrayer" className="form-label">Main Prayer <span className="text-red-500">*</span></label>
              <textarea
                id="mainPrayer"
                name="mainPrayer"
                rows={4}
                className="form-control"
                placeholder="Enter Here"
                required
                value={formData.mainPrayer}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="interimPrayer" className="form-label">Interim Prayer <span className="text-red-500">*</span></label>
              <textarea
                id="interimPrayer"
                name="interimPrayer"
                rows={4}
                className="form-control"
                placeholder="Enter Here"
                required
                value={formData.interimPrayer}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </Card>

        <div className="flex justify-end space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/document-generation')}
          >
            Back
          </Button>
          <Button type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DocumentForm;