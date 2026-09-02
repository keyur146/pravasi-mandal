"use client";

import AdminLayout from "@/app/admin/components/layout/AdminLayout";
import { Card, CardBody, CardHeader, CardTitle } from "@/app/admin/components/ui/Card";
import { Badge } from "@/app/admin/components/ui/Badge";
import { Button } from "@/app/admin/components/ui/Button";
import { Users, Calendar, TrendingUp, Heart, UserPlus, Activity } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Total Members",
    value: "284",
    delta: "+12 this month",
    icon: Users,
    iconClass: "stat-icon-primary",
    textColor: "text-[var(--admin-primary)]",
    badge: "info",
  },
  {
    label: "Active Sessions",
    value: "18",
    delta: "This week",
    icon: Calendar,
    iconClass: "stat-icon-success",
    textColor: "text-[var(--admin-success)]",
    badge: "success",
  },
  {
    label: "Meals Served",
    value: "1,420",
    delta: "+8% vs last month",
    icon: Heart,
    iconClass: "stat-icon-warning",
    textColor: "text-[var(--admin-warning)]",
    badge: "warning",
  },
  {
    label: "Volunteer Hours",
    value: "346",
    delta: "Since Jan 2026",
    icon: TrendingUp,
    iconClass: "stat-icon-error",
    textColor: "text-[var(--admin-error)]",
    badge: "error",
  },
];

const recentActivity = [
  { label: "Kamala Sharma joined",     time: "2 hours ago" },
  { label: "Newsletter email sent",    time: "5 hours ago" },
  { label: "Ramesh Patel updated",     time: "Yesterday"   },
  { label: "Monthly report generated", time: "2 days ago"  },
];

export default function DashboardPage() {
  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6 max-w-7xl mx-auto">

        {/* Welcome banner */}
        <div
          className="relative rounded-2xl p-6 sm:p-8 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--admin-primary) 0%, var(--admin-primary-dark) 100%)",
            boxShadow: "0 8px 32px var(--admin-primary-glow)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />
          <div className="relative flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Welcome back, Admin 👋
              </h2>
              <p className="text-sm text-white/70 mt-1 max-w-md">
                Here&apos;s what&apos;s happening with Pravasi Mandal today.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="default" className="bg-white/20 text-white border-0 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--admin-success)] pulse-dot" />
                System online
              </Badge>
              <Badge variant="default" className="bg-white/20 text-white border-0 backdrop-blur-sm">
                v1.0.0
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.label}
                className="group hover:shadow-[var(--admin-shadow)] transition-shadow duration-200"
              >
                <CardBody className="flex items-start gap-4">
                  <div
                    className={`flex items-center justify-center h-11 w-11 rounded-xl shrink-0 ${s.iconClass} group-hover:scale-105 transition-transform duration-200`}
                  >
                    <Icon className={`h-5 w-5 ${s.textColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[var(--admin-text-muted)] truncate">{s.label}</p>
                    <p className="text-2xl font-bold text-[var(--admin-text)] mt-0.5 leading-none">
                      {s.value}
                    </p>
                    <Badge variant={s.badge} className="mt-2 text-[10px]" dot>
                      {s.delta}
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Two-column: Quick actions + Recent activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Quick actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Quick Actions</CardTitle>
            </CardHeader>
            <CardBody className="space-y-2 py-4">
              <Button asChild variant="outline" className="w-full justify-start gap-3 h-10">
                <Link href="/admin/members/new" id="quick-add-member">
                  <UserPlus className="h-4 w-4" />
                  Add New Member
                </Link>
              </Button>
              <Button asChild variant="secondary" className="w-full justify-start gap-3 h-10">
                <Link href="/admin/members" id="quick-view-members">
                  <Users className="h-4 w-4" />
                  View All Members
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-10 opacity-50 cursor-not-allowed"
                disabled
              >
                <Activity className="h-4 w-4" />
                Generate Report
              </Button>
            </CardBody>
          </Card>

          {/* Recent activity */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm">Recent Activity</CardTitle>
              <span className="text-xs text-[var(--admin-text-muted)]">Last 7 days</span>
            </CardHeader>
            <CardBody className="py-2">
              <div className="divide-y" style={{ borderColor: "var(--admin-border-soft)" }}>
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ background: "var(--admin-primary)" }}
                      />
                      <span className="text-sm text-[var(--admin-text)]">{item.label}</span>
                    </div>
                    <span className="text-xs text-[var(--admin-text-muted)] shrink-0">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

      </div>
    </AdminLayout>
  );
}
