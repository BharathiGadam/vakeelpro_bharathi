
import React, { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LawFirmFormData } from "@/types/lawFirm";

interface ContactDetailsStepProps {
  isViewMode: boolean;
  handleFileChange: (fieldName: string, e: ChangeEvent<HTMLInputElement>) => void;
  logoFile: File | null;
}

const ContactDetailsStep = ({ 
  isViewMode, 
  handleFileChange,
  logoFile 
}: ContactDetailsStepProps) => {
  const { control } = useFormContext<LawFirmFormData>();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="primaryContactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Contact Name*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter primary contact name" 
                  {...field}
                  disabled={isViewMode}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="primaryContactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Contact Number*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter primary contact number" 
                  {...field}
                  disabled={isViewMode}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="alternativeEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alternative Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter alternative email (optional)" 
                  {...field}
                  disabled={isViewMode}
                />
              </FormControl>
              <FormDescription>Optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="alternativeNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alternative Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter alternative number (optional)" 
                  {...field}
                  disabled={isViewMode}
                />
              </FormControl>
              <FormDescription>Optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ContactDetailsStep;
