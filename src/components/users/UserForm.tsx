
import { useState , useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { User } from "@/services/mockUserService";
import { Form } from "@/components/ui/form";
import FormWrapper from "@/components/crud/FormWrapper";
import CustomFormField from "@/components/crud/FormField";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { Upload } from "lucide-react";

const userFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
  status: z.enum(["Active", "Inactive", "Suspended"]),
  phone: z.string().optional(),
  avatar: z.string().optional(),
});

type UserFormData = z.infer<typeof userFormSchema>;

interface UserFormProps {
  user?: User;
  isOpen: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
  isViewMode?: boolean; // Add this line
  title: string;
  description?: string;
}

const UserForm = ({
  user,
  isOpen,
  isSubmitting,
  onClose,
  onSubmit,
  isViewMode,
  title,
  description,
}: UserFormProps) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "USER",
      status: "Active",
      phone: "",
      avatar: ""
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        phone: user.phone || "",
        avatar: user.avatar || ""
      });
    }
  }, [user, form]);

  // Add state for file input
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        form.setValue("avatar", imageUrl);
        setSelectedFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Profile image section */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={form.watch("avatar") || "/placeholder.svg"}
                  alt={form.watch("name") || "Profile"}
                  className="h-full w-full object-cover"
                />
              </div>
              {!isViewMode && (
                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-4 w-4" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Recommended: Square image, at least 200x200px
                  </p>
                </div>
              )}
            </div>

            <CustomFormField
              form={form}
              name="name"
              label="Name"
            >
              <Input 
                {...form.register("name")} 
                value={form.watch("name")}
                onChange={(e) => form.setValue("name", e.target.value)}
                disabled={isViewMode || isSubmitting} 
              />
            </CustomFormField>
            <CustomFormField
              form={form}
              name="email"
              label="Email"
            >
              <Input 
                {...form.register("email")} 
                value={form.watch("email")}
                onChange={(e) => form.setValue("email", e.target.value)}
                disabled={isViewMode || isSubmitting} 
              />
            </CustomFormField>
            
            <CustomFormField
              form={form}
              name="phone"
              label="Phone"
            >
              <Input 
                {...form.register("phone")} 
                value={form.watch("phone")}
                onChange={(e) => form.setValue("phone", e.target.value)}
                disabled={isViewMode || isSubmitting} 
              />
            </CustomFormField>         
            <CustomFormField
              form={form}
              name="role"
              label="Role"
            >
              <Select 
                onValueChange={(value) => form.setValue("role", value)} 
                value={form.watch("role")} 
                disabled={isViewMode || isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="MANAGER">Manager</SelectItem>
                  <SelectItem value="USER">User</SelectItem>
                </SelectContent>
              </Select>
            </CustomFormField>

            <CustomFormField
              form={form}
              name="status"
              label="Status"
            >
              <Select 
                onValueChange={(value: "Active" | "Inactive") => form.setValue("status", value)}
                value={form.watch("status")} 
                disabled={isViewMode || isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </CustomFormField>
            
            {!isViewMode && (
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UserForm;
