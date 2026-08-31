"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AdminLayout from "@/app/admin/components/layout/AdminLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "@/app/admin/components/ui/Card";
import { Input } from "@/app/admin/components/ui/Input";
import { Button } from "@/app/admin/components/ui/Button";
import { Select, SelectItem } from "@/app/admin/components/ui/Select";
import { Separator } from "@/app/admin/components/ui/Separator";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required (min 2 characters)"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9\s+\-()]+$/, "Enter a valid phone number"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Please select a gender"),
  status: z.string().min(1, "Please select a status"),
  address: z.string().min(5, "Address is required (min 5 characters)"),
  notes: z.string().optional(),
});

export default function AddMemberPage() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      status: "",
      address: "",
      notes: "",
    },
  });

  async function onSubmit(data) {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 900));
    console.log("New member data:", data);
    setSuccess(true);
    setTimeout(() => {
      router.push("/admin/members");
    }, 1800);
  }

  if (success) {
    return (
      <AdminLayout title="Add Member">
        <div className="max-w-lg mx-auto mt-16 text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-[var(--admin-success)]" />
          </div>
          <h2 className="text-xl font-bold text-[var(--admin-text)]">
            Member Added!
          </h2>
          <p className="text-sm text-[var(--admin-text-muted)]">
            Redirecting back to the members list…
          </p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Add Member">
      <div className="max-w-2xl mx-auto space-y-5">
        {/* Back link */}
        <Button variant="ghost" size="sm" asChild>
          <Link href="/admin/members">
            <ChevronLeft className="h-4 w-4" />
            Back to Members
          </Link>
        </Button>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Card>
            <CardHeader>
              <CardTitle>New Member</CardTitle>
              <CardDescription>
                Fill in the details below to register a new member with Pravasi
                Mandal.
              </CardDescription>
            </CardHeader>

            <CardBody className="space-y-5">
              {/* Section: Personal Info */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--admin-text-muted)] mb-3">
                  Personal Information
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    placeholder="e.g. Kamala Sharma"
                    required
                    error={errors.fullName?.message}
                    {...register("fullName")}
                    id="member-full-name"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="member@example.com"
                    required
                    error={errors.email?.message}
                    {...register("email")}
                    id="member-email"
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="07700 900 000"
                    required
                    error={errors.phone?.message}
                    {...register("phone")}
                    id="member-phone"
                  />
                  <Input
                    label="Date of Birth"
                    type="date"
                    required
                    error={errors.dateOfBirth?.message}
                    {...register("dateOfBirth")}
                    id="member-dob"
                  />
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Gender"
                        required
                        placeholder="Select gender"
                        value={field.value}
                        onValueChange={field.onChange}
                        error={errors.gender?.message}
                        id="member-gender"
                      >
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Non-binary">Non-binary</SelectItem>
                        <SelectItem value="Prefer not to say">
                          Prefer not to say
                        </SelectItem>
                      </Select>
                    )}
                  />
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Membership Status"
                        required
                        placeholder="Select status"
                        value={field.value}
                        onValueChange={field.onChange}
                        error={errors.status?.message}
                        id="member-status"
                      >
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                      </Select>
                    )}
                  />
                </div>
              </div>

              <Separator />

              {/* Section: Address */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--admin-text-muted)] mb-3">
                  Contact Details
                </p>
                <div className="space-y-4">
                  <Input
                    label="Address"
                    placeholder="123 High Street, Wellingborough, NN8 1AA"
                    required
                    error={errors.address?.message}
                    {...register("address")}
                    id="member-address"
                  />
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="member-notes"
                      className="text-sm font-medium text-[var(--admin-text)]"
                    >
                      Notes{" "}
                      <span className="text-[var(--admin-text-muted)] font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="member-notes"
                      rows={3}
                      placeholder="Any additional notes about this member…"
                      className="w-full rounded-md border border-[var(--admin-border)] bg-[var(--admin-surface)] px-3 py-2 text-sm text-[var(--admin-text)] placeholder:text-[var(--admin-text-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-primary)] focus:border-transparent resize-none transition-colors"
                      {...register("notes")}
                    />
                  </div>
                </div>
              </div>
            </CardBody>

            <CardFooter className="gap-3 justify-end">
              <Button
                variant="secondary"
                type="button"
                onClick={() => router.push("/admin/members")}
                id="cancel-add-member"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                id="submit-add-member"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Saving…
                  </span>
                ) : (
                  "Save Member"
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </AdminLayout>
  );
}
