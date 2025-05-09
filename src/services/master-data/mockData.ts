
import { CourtData, LawTypeData, ClientData,Document, Party, Attachment, StatusUpdate, Case } from './types';

// Mock data storage
export const courtsMockData: CourtData[] = [
  { id: "court-1", name: "Supreme Court", location: "Washington, DC", type: "Federal" },
  { id: "court-2", name: "US District Court", location: "New York, NY", type: "Federal" },
  { id: "court-3", name: "State Superior Court", location: "Los Angeles, CA", type: "State" },
  { id: "court-4", name: "Family Court", location: "Chicago, IL", type: "Specialized" },
  { id: "court-5", name: "Bankruptcy Court", location: "Miami, FL", type: "Federal" },
];

export const lawTypesMockData: LawTypeData[] = [
  { id: "law-1", name: "Criminal Law", description: "Deals with crimes and their punishment" },
  { id: "law-2", name: "Civil Law", description: "Resolves disputes between individuals or organizations" },
  { id: "law-3", name: "Corporate Law", description: "Governs formation and operations of corporations" },
  { id: "law-4", name: "Family Law", description: "Domestic relations and family matters" },
  { id: "law-5", name: "Intellectual Property", description: "Protects creations of the mind" },
];

export const clientsMockData: ClientData[] = [
  { id: "client-1", name: "Acme Corporation", type: "Corporate", industry: "Manufacturing" },
  { id: "client-2", name: "TechCorp Inc.", type: "Corporate", industry: "Technology" },
  { id: "client-3", name: "John Smith", type: "Individual", industry: "N/A" },
  { id: "client-4", name: "Global Services Ltd.", type: "Corporate", industry: "Services" },
  { id: "client-5", name: "Healthcare Solutions", type: "Corporate", industry: "Healthcare" },
];
export const documents: Document[] = [
  { id: "1",clientName: "Tech Solutions Inc", documentType: "Writ Petition",court: "High Court", caseNo: "CASE/9163/2025",caseType: "Tax", advocate: "Jessica White",filingDate: "2025-05-05",status: "Initial",
    docStatus: "Rejected",caseStage: "Pre-filing",hearingDate: "2025-02-02" },
  {
    id: "2",
    clientName: "Acme Corp",
    documentType: "Counter Affidavit",
    court: "Lower Court",
    caseNo: "CASE/4083/2025",
    caseType: "Criminal",
    advocate: "Robert Brown",
    filingDate: "2025-05-04",
    status: "Closed",
    docStatus: "Vetting",
    caseStage: "Filing",
    hearingDate: "2025-02-09"
  },
  {
    id: "3",
    clientName: "Global Industries",
    documentType: "Summons & Notices",
    court: "High Court",
    caseNo: "CASE/6442/2025",
    caseType: "Family",
    advocate: "James Wilson",
    filingDate: "2025-04-29",
    status: "Initial",
    docStatus: "Approved",
    caseStage: "Judgment Reserved",
    hearingDate: "2025-01-16"
  },
  {
    id: "4",
    clientName: "Acme Corp",
    documentType: "Divorce Petition",
    court: "High Court",
    caseNo: "CASE/7089/2025",
    caseType: "Other",
    advocate: "Jessica White",
    filingDate: "2025-04-16",
    status: "Ongoing",
    docStatus: "Review",
    caseStage: "Pre-filing",
    hearingDate: "2025-05-03"
  },
  {
    id: "5",
    clientName: "Global Industries",
    documentType: "Special Leave Petition",
    court: "High Court",
    caseNo: "CASE/3058/2025",
    caseType: "Corporate",
    advocate: "William Lee",
    filingDate: "2025-04-07",
    status: "Closed",
    docStatus: "Review",
    caseStage: "Notice Issued",
    hearingDate: "2025-01-26"
  },
  {
    id: "6",
    clientName: "First National Bank",
    documentType: "Curative Petition",
    court: "Lower Court",
    caseNo: "CASE/2459/2025",
    caseType: "Civil",
    advocate: "William Lee",
    filingDate: "2025-03-29",
    status: "Ongoing",
    docStatus: "Draft",
    caseStage: "Judgment Reserved",
    hearingDate: "2025-05-03"
  },
  {
    id: "7",
    clientName: "Tech Solutions Inc",
    documentType: "Affidavit",
    court: "Supreme Court",
    caseNo: "CASE/9672/2025",
    caseType: "Civil",
    advocate: "Robert Brown",
    filingDate: "2025-03-04",
    status: "Closed",
    docStatus: "Rejected",
    caseStage: "Filing",
    hearingDate: "2025-03-30"
  },
  {
    id: "8",
    clientName: "Tech Solutions Inc",
    documentType: "Writ Petition",
    court: "High Court",
    caseNo: "CASE/4472/2025",
    caseType: "Family",
    advocate: "James Wilson",
    filingDate: "2025-02-17",
    status: "Initial",
    docStatus: "Review",
    caseStage: "Notice Issued",
    hearingDate: "2025-04-10"
  },
  {
    id: "9",
    clientName: "First National Bank",
    documentType: "Special Leave Petition",
    court: "High Court",
    caseNo: "CASE/1660/2025",
    caseType: "Criminal",
    advocate: "James Wilson",
    filingDate: "2025-02-06",
    status: "Ongoing",
    docStatus: "Vetting",
    caseStage: "Filing",
    hearingDate: "2025-02-17"
  }
]
export const sampleCase: Case = {
  id: "1",
  caseNo: "807",
  clientName: "Ganesh",
  court: "Lower Court",
  caseType: "Criminal",
  dateOfFiling: "26/05/2024",
  judgeSection: "3rd Bench 4th slot A",
  judgeNo: "27",
  judgeName: "Smith",
  courtRoomNo: "27",
  underActs: "Nadu third rule a",
  firPoliceStation: "Alathur et vel omnis",
  firNo: "75",
  stage: "Pendet velit in non",
  yourParty: "Petitioner/Plaintiff",
  oppositePartyAdvocates: "Fallon Church, Isaiah Vincent"
};

export const partyMembers: Party[] = [
  {
    id: "1",
    name: "Nithursha",
    phoneNo: "9029838299"
  },
  {
    id: "2",
    name: "Bhargavi",
    phoneNo: "9143256780"
  }
];

export const oppositePartyMembers: Party[] = [
  {
    id: "1",
    name: "Nithursha",
    phoneNo: "9029838299",
    address: "350 5th Ave, New York, NY 10118, USA, New York, New York City"
  },
  {
    id: "2",
    name: "Bhargavi",
    phoneNo: "9143256780",
    address: "Kuala Lumpur, Jalan Ampang 50450, Malaysia, Kuala Lumpur"
  }
];

export const attachments: Attachment[] = [
  {
    id: "1",
    fileName: "download_7034506536392.jpeg",
    url: "#"
  }
];

export const statusUpdates: StatusUpdate[] = [
  {
    id: "1",
    status: "Approved",
    updatedBy: "Robert Wilson",
    timestamp: "May 7th, 2025",
    remarks: ""
  },
  {
    id: "2",
    status: "Review",
    updatedBy: "John Smith",
    timestamp: "May 7th, 2025",
    remarks: "Document needs minor revisions before approval"
  },
  {
    id: "3",
    status: "Vetting",
    updatedBy: "Michael Brown",
    timestamp: "May 7th, 2025",
    remarks: "Checking document format and legal requirements"
  },
  {
    id: "4",
    status: "Vetting",
    updatedBy: "Michael Brown",
    timestamp: "December 11th, 2024",
    remarks: "Initial draft created based on case details"
  }
];

export const documentTemplates = [
  "Writ Petition",
  "Special Leave Petition",
  "Counter Affidavit",
  "Curative Petition",
  "Summons & Notices",
  "Affidavit",
  "Divorce Petition"
];

export const clients = [
  "Rajesh Kumar",
  "Ramesh Sharma",
  "Sunita Devi",
  "Ravi Kumar",
  "Ganesh",
  "Nithursha",
  "Bhargavi"
];

export const caseNumbers = [
  "HC/2024/123",
  "SC/2023/567",
  "DC/2024/789",
  "FC/2023/234",
  "807"
];


// Country, State, City mock data
export const countriesMockData = [
  { id: "IN", name: "India" },
  { id: "US", name: "United States" },
  { id: "UK", name: "United Kingdom" },
  { id: "CA", name: "Canada" },
  { id: "AU", name: "Australia" }
];

export const statesMockData = [
  // India States
  { id: "TN", name: "Tamil Nadu", countryId: "IN" },
  { id: "KA", name: "Karnataka", countryId: "IN" },
  { id: "MH", name: "Maharashtra", countryId: "IN" },
  { id: "DL", name: "Delhi", countryId: "IN" },
  { id: "KL", name: "Kerala", countryId: "IN" },
  
  // US States
  { id: "NY", name: "New York", countryId: "US" },
  { id: "CA", name: "California", countryId: "US" },
  { id: "TX", name: "Texas", countryId: "US" },
  { id: "FL", name: "Florida", countryId: "US" },
  { id: "IL", name: "Illinois", countryId: "US" },
  
  // UK States
  { id: "EN", name: "England", countryId: "UK" },
  { id: "SC", name: "Scotland", countryId: "UK" },
  { id: "WL", name: "Wales", countryId: "UK" },
  { id: "NI", name: "Northern Ireland", countryId: "UK" }
];

export const citiesMockData = [
  // Tamil Nadu Cities
  { id: "CHE", name: "Chennai", stateId: "TN" },
  { id: "CBE", name: "Coimbatore", stateId: "TN" },
  { id: "MDU", name: "Madurai", stateId: "TN" },
  
  // Karnataka Cities
  { id: "BLR", name: "Bangalore", stateId: "KA" },
  { id: "MYS", name: "Mysore", stateId: "KA" },
  { id: "HUB", name: "Hubli", stateId: "KA" },
  
  // Maharashtra Cities
  { id: "MUM", name: "Mumbai", stateId: "MH" },
  { id: "PUN", name: "Pune", stateId: "MH" },
  { id: "NGP", name: "Nagpur", stateId: "MH" },
  
  // New York Cities
  { id: "NYC", name: "New York City", stateId: "NY" },
  { id: "BUF", name: "Buffalo", stateId: "NY" },
  { id: "ROC", name: "Rochester", stateId: "NY" },
  
  // California Cities
  { id: "LAX", name: "Los Angeles", stateId: "CA" },
  { id: "SFO", name: "San Francisco", stateId: "CA" },
  { id: "SAN", name: "San Diego", stateId: "CA" },
  
  // England Cities
  { id: "LON", name: "London", stateId: "EN" },
  { id: "MAN", name: "Manchester", stateId: "EN" },
  { id: "BRM", name: "Birmingham", stateId: "EN" }
];


export const lawFirmsMockData = [
  {
    id: "1",
    name: "Smith & Associates",
    adminEmail: "john.smith@smithlaw.com",
    primaryContactNumber: "+1 (555) 123-4567",
    adminName: "John Smith",
    adminPhone: "+1 (555) 987-6543",
    officeAddress: "123 Legal Street",
    city: "New York City",
    state: "New York",
    zipCode: "10001",
    isActive: true
  },
  {
    id: "2",
    name: "Global Legal Solutions",
    adminEmail: "sarah.johnson@globallegal.com",
    primaryContactNumber: "+1 (555) 234-5678",
    adminName: "Sarah Johnson",
    adminPhone: "+1 (555) 876-5432",
    officeAddress: "456 Law Avenue",
    city: "Los Angeles",
    state: "California",
    zipCode: "90001",
    isActive: true
  },
  {
    id: "3",
    name: "Elite Law Partners",
    adminEmail: "michael.brown@elitelaw.com",
    primaryContactNumber: "+1 (555) 345-6789",
    adminName: "Michael Brown",
    adminPhone: "+1 (555) 765-4321",
    officeAddress: "789 Justice Road",
    city: "Chicago",
    state: "Illinois",
    zipCode: "60601",
    isActive: false
  }
];
