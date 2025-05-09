
// Common types for Master Data entities
export interface CourtData {
  id: string;
  name: string;
  location: string;
  type: string;
}


export interface LawTypeData {
  id: string;
  name: string;
  description: string;
}

export interface ClientData {
  id: string;
  name: string;
  type: string;
  industry: string;
}
export interface LawFirm {
  id: string;
  name: string;
  adminEmail: string;
  primaryContactNumber: string;
  adminName: string;
  adminPhone: string;
  officeAddress: string;
  city: string;
  state: string;
  zipCode: string;
  isActive: boolean;
  registrationNumber: string;
  firmType: string;
  taxId: string;
  establishmentYear: number;
  website?: string;
  licenseNumber: string;
  barAssociation: string;
  numberOfLawyers: number;
  specialties: string[];
}
export interface Document  {
  id: string;
  clientName: string;
  documentType: string;
  court: string;
  caseNo: string;
  caseType: string;
  advocate: string;
  filingDate: string;
  status: 'Approved' | 'Vetting' | 'Review' | 'Draft' | 'Rejected' | 'Initial' | 'Closed' | 'Ongoing';
  docStatus?: 'Approved' | 'Vetting' | 'Review' | 'Draft' | 'Rejected';
  caseStage?: string;
  hearingDate?: string;
  deponentVerification?: string; // Add as optional
  facts?: string; // Add as optional
  grounds?: string; // Add as optional
  mainPrayer?: string; // Add as optional
  interimPrayer?: string;
};

export interface Case  {
  id: string;
  caseNo: string;
  clientName: string;
  court: string;
  caseType: string;
  dateOfFiling: string;
  judgeSection: string;
  judgeNo: string;
  judgeName: string;
  courtRoomNo: string;
  underActs: string;
  firPoliceStation: string;
  firNo: string;
  stage: string;
  yourParty: string;
  oppositePartyAdvocates: string;
};

export interface Party  {
  id: string;
  name: string;
  phoneNo: string;
  address?: string;
};

export interface Attachment {
  id: string;
  fileName: string;
  url: string;
};

export interface DocumentForm {
  documentTemplate: string;
  deponentVerification: string;
  facts: string;
  grounds: string;
  mainPrayer: string;
  interimPrayer: string;
};

export interface StatusUpdate  {
  id: string;
  status: 'Approved' | 'Vetting' | 'Review' | 'Draft' | 'Rejected';
  updatedBy: string;
  timestamp: string;
  remarks?: string;
};

export interface SearchParams  {
  clientName?: string;
  caseNo?: string;
  aadhaarNo?: string;
  phoneNo?: string;
};
