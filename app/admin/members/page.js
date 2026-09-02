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
import { Card, CardHeader, CardBody } from "@/app/admin/components/ui/Card";
import {
  UserPlus,
  Search,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Filter,
  Eye,
  X,
  Mail,
  Phone,
  User,
  Calendar,
  MapPin,
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
    address: "14 Rose Lane, Wellingborough, NN8 1AB",
    notes: "Long-standing member, volunteers regularly.",
  },
  {
    id: 2,
    name: "Ramesh Patel",
    email: "ramesh.patel@example.com",
    phone: "07700 900456",
    status: "Active",
    gender: "Male",
    joined: "04 Jun 2019",
    address: "22 Oak Street, Northampton, NN1 2BC",
    notes: "Treasurer for 2022–2023.",
  },
  {
    id: 3,
    name: "Savita Desai",
    email: "savita.desai@example.com",
    phone: "07700 900789",
    status: "Inactive",
    gender: "Female",
    joined: "19 Jan 2023",
    address: "5 Maple Close, Kettering, NN15 7CD",
    notes: "On medical leave.",
  },
  {
    id: 4,
    name: "Haresh Mehta",
    email: "haresh.mehta@example.com",
    phone: "07700 900321",
    status: "Active",
    gender: "Male",
    joined: "27 Aug 2020",
    address: "8 Birch Avenue, Corby, NN17 4DE",
    notes: "",
  },
  {
    id: 5,
    name: "Priya Nair",
    email: "priya.nair@example.com",
    phone: "07700 900654",
    status: "Pending",
    gender: "Female",
    joined: "01 Feb 2024",
    address: "33 Cedar Road, Rushden, NN10 9EF",
    notes: "Membership pending payment.",
  },
  {
    id: 6,
    name: "Dinesh Kumar",
    email: "dinesh.kumar@example.com",
    phone: "07700 900987",
    status: "Active",
    gender: "Male",
    joined: "15 Nov 2018",
    address: "19 Willow Drive, Daventry, NN11 0FG",
    notes: "Event coordinator.",
  },
];

const STATUS_BADGE = {
  Active: "success",
  Inactive: "error",
  Pending: "warning",
};

function MemberAvatar({ name, size = "sm" }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const sizeClass = size === "lg" ? "h-14 w-14 text-lg" : "h-8 w-8 text-xs";
  return (
    <div
      className={`flex items-center justify-center rounded-full font-semibold shrink-0 text-[var(--admin-primary)] ${sizeClass}`}
      style={{ background: "var(--admin-primary-soft)" }}
    >
      {initials}
    </div>
  );
}

/* ── Member detail sheet ──────────────────────────── */
function MemberSheet({ member, onClose }) {
  if (!member) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet panel */}
      <div
        className="fixed inset-y-0 right-0 z-50 flex flex-col w-full max-w-sm sm:max-w-md shadow-2xl"
        style={{ background: "var(--admin-surface)", borderLeft: "1px solid var(--admin-border)" }}
        role="dialog"
        aria-label={`Member details: ${member.name}`}
      >
        {/* Sheet header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b shrink-0"
          style={{ borderColor: "var(--admin-border)" }}
        >
          <h2 className="text-base font-semibold text-[var(--admin-text)]">
            Member Details
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--admin-text-muted)] hover:text-[var(--admin-text)] hover:bg-[var(--admin-surface-2)] transition-colors"
            aria-label="Close details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Sheet body — scrollable */}
        <div className="flex-1 overflow-y-auto">
          {/* Profile hero */}
          <div
            className="flex flex-col items-center gap-3 px-6 py-8 border-b"
            style={{
              background: "linear-gradient(180deg, var(--admin-primary-soft) 0%, var(--admin-surface) 100%)",
              borderColor: "var(--admin-border)",
            }}
          >
            <MemberAvatar name={member.name} size="lg" />
            <div className="text-center">
              <h3 className="text-lg font-bold text-[var(--admin-text)]">{member.name}</h3>
              <p className="text-sm text-[var(--admin-text-muted)] mt-0.5">#{member.id.toString().padStart(4, "0")}</p>
            </div>
            <Badge variant={STATUS_BADGE[member.status]} dot>
              {member.status}
            </Badge>
          </div>

          {/* Details list */}
          <div className="px-5 py-5 space-y-4">
            <DetailRow icon={Mail} label="Email" value={member.email} />
            <DetailRow icon={Phone} label="Phone" value={member.phone} />
            <DetailRow
              icon={User}
              label="Gender"
              value={member.gender}
            />
            <DetailRow
              icon={Calendar}
              label="Member Since"
              value={member.joined}
            />
            <DetailRow
              icon={MapPin}
              label="Address"
              value={member.address}
            />
            {member.notes && (
              <div
                className="rounded-xl p-4 border"
                style={{ background: "var(--admin-surface-2)", borderColor: "var(--admin-border-soft)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--admin-text-subtle)] mb-1.5">
                  Notes
                </p>
                <p className="text-sm text-[var(--admin-text-muted)] leading-relaxed">
                  {member.notes}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sheet footer actions */}
        <div
          className="flex gap-3 px-5 py-4 border-t shrink-0"
          style={{ borderColor: "var(--admin-border)" }}
        >
          <Button variant="secondary" className="flex-1 gap-2">
            <Pencil className="h-3.5 w-3.5" />
            Edit Member
          </Button>
          <Button
            variant="ghost"
            className="gap-2 text-[var(--admin-error)] hover:bg-[var(--admin-error-soft)] hover:text-[var(--admin-error)]"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0 mt-0.5"
        style={{ background: "var(--admin-surface-2)", border: "1px solid var(--admin-border-soft)" }}
      >
        <Icon className="h-3.5 w-3.5 text-[var(--admin-text-muted)]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--admin-text-subtle)]">
          {label}
        </p>
        <p className="text-sm text-[var(--admin-text)] mt-0.5 break-words">{value}</p>
      </div>
    </div>
  );
}

/* ── Main page ────────────────────────────────────── */
export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  const filtered = DUMMY_MEMBERS.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Members">
      <div className="space-y-5 max-w-7xl mx-auto">

        {/* Page header */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-bold text-[var(--admin-text)]">Members</h2>
            <p className="text-sm text-[var(--admin-text-muted)] mt-0.5">
              {DUMMY_MEMBERS.length} members registered
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            asChild
            style={{
              background: "linear-gradient(135deg, var(--admin-primary), var(--admin-primary-dark))",
              boxShadow: "0 4px 16px var(--admin-primary-glow)",
            }}
          >
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

          {/* Scrollable table — all screen sizes */}
          <div className="admin-table-wrapper">
            <CardBody className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead style={{ minWidth: "180px" }}>Name</TableHead>
                    <TableHead style={{ minWidth: "200px" }}>Email</TableHead>
                    <TableHead style={{ minWidth: "140px" }}>Phone</TableHead>
                    <TableHead style={{ minWidth: "90px" }}>Gender</TableHead>
                    <TableHead style={{ minWidth: "90px" }}>Status</TableHead>
                    <TableHead style={{ minWidth: "120px" }}>Joined</TableHead>
                    <TableHead className="text-right" style={{ minWidth: "130px" }}>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="text-center py-12 text-[var(--admin-text-muted)]"
                      >
                        No members found matching &ldquo;{search}&rdquo;
                      </TableCell>
                    </TableRow>
                  ) : (
                    filtered.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <MemberAvatar name={member.name} />
                            <span className="font-medium text-[var(--admin-text)] whitespace-nowrap">
                              {member.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-[var(--admin-text-muted)]">
                          {member.email}
                        </TableCell>
                        <TableCell className="text-[var(--admin-text-muted)] whitespace-nowrap">
                          {member.phone}
                        </TableCell>
                        <TableCell className="text-[var(--admin-text-muted)]">
                          {member.gender}
                        </TableCell>
                        <TableCell>
                          <Badge variant={STATUS_BADGE[member.status]} dot>
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-[var(--admin-text-muted)] whitespace-nowrap">
                          {member.joined}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            {/* View */}
                            <Button
                              variant="ghost"
                              size="icon"
                              title="View member"
                              aria-label={`View ${member.name}`}
                              onClick={() => setSelectedMember(member)}
                              className="hover:bg-[var(--admin-info-soft)] hover:text-[var(--admin-info)]"
                            >
                              <Eye className="h-3.5 w-3.5" />
                            </Button>
                            {/* Edit */}
                            <Button
                              variant="ghost"
                              size="icon"
                              title="Edit member"
                              aria-label={`Edit ${member.name}`}
                              className="hover:bg-[var(--admin-primary-soft)] hover:text-[var(--admin-primary)]"
                            >
                              <Pencil className="h-3.5 w-3.5" />
                            </Button>
                            {/* Delete */}
                            <Button
                              variant="ghost"
                              size="icon"
                              title="Delete member"
                              aria-label={`Delete ${member.name}`}
                              className="hover:bg-[var(--admin-error-soft)] hover:text-[var(--admin-error)]"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardBody>
          </div>

          {/* Pagination */}
          <div
            className="flex items-center justify-between px-6 py-3 border-t"
            style={{ borderColor: "var(--admin-border)" }}
          >
            <p className="text-xs text-[var(--admin-text-muted)]">
              Showing{" "}
              <span className="font-semibold text-[var(--admin-text)]">{filtered.length}</span>
              {" "}of{" "}
              <span className="font-semibold text-[var(--admin-text)]">{DUMMY_MEMBERS.length}</span>
              {" "}members
            </p>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span
                className="flex items-center justify-center h-8 w-8 rounded-lg text-white text-xs font-semibold"
                style={{ background: "var(--admin-primary)" }}
              >
                1
              </span>
              <Button variant="ghost" size="icon" disabled>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Member detail sheet */}
      <MemberSheet
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </AdminLayout>
  );
}
