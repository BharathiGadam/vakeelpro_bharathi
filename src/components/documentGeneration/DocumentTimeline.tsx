
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { statusUpdates } from '@/services/master-data/mockData';


const DocumentTimeline = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  return (
    <div className="bg-white shadow-sm rounded-lg border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Document Status Timeline</h2>
        
        <Button 
          variant="outline" 
          onClick={() => navigate('/document-generation')}
          className="border-gray-300"
        >
          Back
        </Button> 
      </div>

      <div className="relative pl-8 border-l-2 border-gray-200 space-y-6">
        {statusUpdates.map((update) => (
          <div key={update.id} className="relative">
            {/* Timeline dot */}
            <div className={`absolute -left-4 w-6 h-6 rounded-full flex items-center justify-center ${
              update.status === 'Approved' ? 'bg-green-500' :
              update.status === 'Review' ? 'bg-yellow-500' :
              update.status === 'Vetting' ? 'bg-orange-500' :
              update.status === 'Draft' ? 'bg-gray-500' :
              update.status === 'Rejected' ? 'bg-red-500' : 'bg-gray-500'
            } text-white text-xs`}>
              {update.status.charAt(0)}
            </div>
            
            <div className="bg-gray-50 border rounded-md p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900 mb-0.5">{update.status}</h3>
                  <p className="text-sm text-gray-600">Updated by: {update.updatedBy}</p>
                  
                  {update.remarks && (
                    <div className="mt-3 border-t pt-2">
                      <h4 className="text-sm font-medium text-gray-700">Remarks:</h4>
                      <p className="text-sm text-gray-600 mt-1">{update.remarks}</p>
                    </div>
                  )}
                </div>
                <span className="text-sm text-gray-500">{update.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentTimeline;
