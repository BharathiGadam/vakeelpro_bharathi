import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "@/redux/store";
import { fetchLawFirms } from '@/redux/slices/law-firm';
import LawFirmList from "@/components/law-firm/LawFirmList";
import CrudLayout from "@/components/crud/CrudLayout";
import { toast } from "@/hooks/use-toast";

const LawFirms = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchLawFirms({ search }));
  }, [dispatch, search]);

  const handleSearch = (query: string) => {
    setSearch(query);
    dispatch(fetchLawFirms({ search: query }));
    
    if (query) {
      toast({
        title: "Search",
        description: `Searching for "${query}"`
      });
    }
  };

  const handleAddNew = () => {
    navigate("/law-firms/create");
    toast({
      title: "Navigation",
      description: "Create a new law firm"
    });
  };

  return (
    <CrudLayout 
  title="Law Firm Management"
  description="Manage all registered law firms and their subscriptions"
  searchPlaceholder="Search law firms..."
  onSearch={handleSearch}
  onAdd={handleAddNew}
  addButtonText="Add Law Firm"
  // addButtonClassName="bg-blue-500 hover:bg-blue-600 text-white"
  searchValue={search}
>
  <div className="space-y-4">
    <LawFirmList />
  </div>
</CrudLayout>
  );
};

export default LawFirms;
