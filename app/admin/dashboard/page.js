"use client";

import AdminLayout from "@/app/admin/components/layout/AdminLayout";
import { Card, CardBody } from "@/app/admin/components/ui/Card";
import { Badge } from "@/app/admin/components/ui/Badge";
import { Users, Calendar, TrendingUp, Heart } from "lucide-react";

const stats = [
  {
    label: "Total Members",
    value: "284",
    delta: "+12 this month",
    icon: Users,
    color: "text-[var(--admin-primary)]",
    bg: "bg-[var(--admin-primary-soft)]",
    badge: "info",
  },
  {
    label: "Active Sessions",
    value: "18",
    delta: "This week",
    icon: Calendar,
    color: "text-[var(--admin-success)]",
    bg: "bg-[var(--admin-success-soft)]",
    badge: "success",
  },
  {
    label: "Meals Served",
    value: "1,420",
    delta: "+8% vs last month",
    icon: Heart,
    color: "text-[var(--admin-warning)]",
    bg: "bg-[var(--admin-warning-soft)]",
    badge: "warning",
  },
  {
    label: "Volunteer Hours",
    value: "346",
    delta: "Since Jan 2026",
    icon: TrendingUp,
    color: "text-[var(--admin-error)]",
    bg: "bg-[var(--admin-error-soft)]",
    badge: "error",
  },
];

export default function DashboardPage() {
  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.label}>
                <CardBody className="flex items-start gap-4">
                  <div
                    className={`flex items-center justify-center h-10 w-10 rounded-lg shrink-0 ${s.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${s.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--admin-text-muted)]">
                      {s.label}
                    </p>
                    <p className="text-2xl font-bold text-[var(--admin-text)] mt-0.5">
                      {s.value}
                    </p>
                    <Badge variant={s.badge} className="mt-1.5 text-[10px]" dot>
                      {s.delta}
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Welcome card */}
        <Card>
          <CardBody>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-lg font-semibold text-[var(--admin-text)]">
                  Welcome back 👋
                </h2>
                <p className="text-sm text-[var(--admin-text-muted)] mt-1 max-w-md">
                  This is the Pravasi Mandal Admin Panel. Use the sidebar to
                  navigate between modules. The{" "}
                  <span className="text-[var(--admin-primary)] font-medium">
                    Members
                  </span>{" "}
                  module is ready to explore.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="success" dot>System online</Badge>
                <Badge variant="info" dot>v1.0.0</Badge>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </AdminLayout>
  );
}
