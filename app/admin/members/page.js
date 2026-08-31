"use client";

import { useState } from "react";
import Link from "next/link";
import AdminLayout from "@/app/admin/components/layout/AdminLayout";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/app/admin/components/ui/Table";
import { Badge } from "@/app/admin/components/ui/Badge";
import { Button } from "@/app/admin/components/ui/Button";
import { Input } from "@/app/admin/components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from "@/app/admin/components/ui/Card";
import {
  UserPlus,
  Search,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";

const DUMMY_MEMBERS = [
  {
    id: 1,
    name: "Kamala Sharma",
    email: "kamala.sharma@example.com",
    phone: "07700 900123",
    status: "Active",
    gender: "Female",
    joined: "12 Mar 2021",
  },
  {
    id: 2,
    name: "Ramesh Patel",
    email: "ramesh.patel@example.com",
    phone: "07700 900456",
    status: "Active",
    gender: "Male",
    joined: "04 Jun 2019",
  },
  {
    id: 3,
    name: "Savita Desai",
    email: "savita.desai@example.com",
    phone: "07700 900789",
    status: "Inactive",
    gender: "Female",
    joined: "19 Jan 2023",
  },
  {
    id: 4,
    name: "Haresh Mehta",
    email: "haresh.mehta@example.com",
    phone: "07700 900321",
    status: "Active",
    gender: "Male",
    joined: "27 Aug 2020",
  },
  {
    id: 5,
    name: "Priya Nair",
    email: "priya.nair@example.com",
    phone: "07700 900654",
    status: "Pending",
    gender: "Female",
    joined: "01 Feb 2024",
  },
  {
    id: 6,
    name: "Dinesh Kumar",
    email: "dinesh.kumar@example.com",
    phone: "07700 900987",
    status: "Active",
    gender: "Male",
    joined: "15 Nov 2018",
  },
];

const STATUS_BADGE = {
  Active: "success",
  Inactive: "error",
  Pending: "warning",
};

export default function MembersPage() {
  const [search, setSearch] = useState("");

  const filtered = DUMMY_MEMBERS.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Members">
      <div className="space-y-5">
        {/* Page header row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-bold text-[var(--admin-text)]">
              Members
            </h2>
            <p className="text-sm text-[var(--admin-text-muted)] mt-0.5">
              {DUMMY_MEMBERS.length} members in total
            </p>
          </div>
          <Button variant="primary" size="md" asChild>
            <Link href="/admin/members/new" id="add-member-btn">
              <UserPlus className="h-4 w-4" />
              Add Member
            </Link>
          </Button>
        </div>

        <Card>
          {/* Filters */}
          <CardHeader className="flex-row items-center gap-3 flex-wrap">
            <div className="flex-1 min-w-48">
              <Input
                placeholder="Search by name or email…"
                leftIcon={<Search className="h-3.5 w-3.5" />}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="member-search"
              />
            </div>
            <Button variant="secondary" size="md">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </CardHeader>

          {/* Table */}
          <CardBody className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-10 text-[var(--admin-text-muted)]"
                    >
                      No members found matching &ldquo;{search}&rdquo;
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--admin-primary-soft)] text-[var(--admin-primary)] text-xs font-semibold shrink-0">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                          <span className="font-medium text-[var(--admin-text)]">
                            {member.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-[var(--admin-text-muted)]">
                        {member.email}
                      </TableCell>
                      <TableCell className="text-[var(--admin-text-muted)]">
                        {member.phone}
                      </TableCell>
                      <TableCell className="text-[var(--admin-text-muted)]">
                        {member.gender}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={STATUS_BADGE[member.status]}
                          dot
                        >
                          {member.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[var(--admin-text-muted)]">
                        {member.joined}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Edit member"
                            aria-label={`Edit ${member.name}`}
                          >
                            <Pencil className="h-3.5 w-3.5 text-[var(--admin-text-muted)]" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Delete member"
                            aria-label={`Delete ${member.name}`}
                          >
                            <Trash2 className="h-3.5 w-3.5 text-[var(--admin-error)]" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardBody>

          {/* Pagination (visual) */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-[var(--admin-border)]">
            <p className="text-xs text-[var(--admin-text-muted)]">
              Showing{" "}
              <span className="font-medium text-[var(--admin-text)]">
                {filtered.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-[var(--admin-text)]">
                {DUMMY_MEMBERS.length}
              </span>{" "}
              members
            </p>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="flex items-center justify-center h-8 w-8 rounded-md bg-[var(--admin-primary)] text-white text-xs font-medium">
                1
              </span>
              <Button variant="ghost" size="icon" disabled>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
