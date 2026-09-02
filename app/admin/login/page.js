"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { login } from "@/store/slices/authSlice";
import { Eye, EyeOff, AlertCircle, Shield, Users, BarChart3 } from "lucide-react";
import { Button } from "@/app/admin/components/ui/Button";
import { Input } from "@/app/admin/components/ui/Input";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/app/admin/components/ThemeToggle";

const features = [
  { icon: Shield, text: "Secure admin access" },
  { icon: Users, text: "Manage 280+ members" },
  { icon: BarChart3, text: "Track activities & reports" },
];

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const DEMO_EMAIL = "admin@pravasi.org";
const DEMO_PASSWORD = "admin123";

export default function AdminLoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(data) {
    setServerError("");
    // Simulate async auth
    await new Promise((r) => setTimeout(r, 800));

    if (data.email === DEMO_EMAIL && data.password === DEMO_PASSWORD) {
      dispatch(
        login({ name: "Admin User", email: data.email, role: "admin" })
      );
      router.push("/admin/dashboard");
    } else {
      setServerError("Invalid email or password. Try admin@pravasi.org / admin123");
    }
  }

  return (
    <div className="admin-root min-h-screen flex flex-col lg:flex-row admin-login-bg">
      {/* Floating orbs */}
      <div className="admin-orb admin-orb-1" />
      <div className="admin-orb admin-orb-2" />
      <div className="admin-orb admin-orb-3" />
      {/* Dot grid */}
      <div className="admin-grid-dots" />

      {/* ── Left brand panel (hidden on small screens) ── */}
      {/* Always dark regardless of theme — force dark bg here */}
      <div
        className="hidden lg:flex lg:w-[52%] flex-col justify-between p-10 xl:p-14 relative z-10"
        style={{ background: "linear-gradient(160deg, #0f1221 0%, #17153a 60%, #0c0e1a 100%)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-2xl p-3"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              width: "270px",
              height: "100px",
            }}
          >
            <Image
              src="/assets/img/pravasi-mandal-logo.png"
              alt="Pravasi Mandal Logo"
              width={250}
              height={70}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Hero text */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--admin-primary)]/20 border border-[var(--admin-primary)]/30 text-xs font-medium text-[var(--admin-primary)] uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--admin-primary)] pulse-dot" />
              Admin Portal
            </div>
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
              Pravasi Mandal
              <br />
              <span className="admin-gradient-text">Management</span>
            </h1>
            <p className="text-base text-white/50 leading-relaxed max-w-sm">
              Streamline operations, manage members, and track community activities — all in one place.
            </p>
          </div>

          {/* Feature list */}
          <div className="space-y-3">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--admin-primary)]/15 border border-[var(--admin-primary)]/20">
                  <Icon className="h-3.5 w-3.5 text-[var(--admin-primary)]" />
                </div>
                <span className="text-sm text-white/60">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Pravasi Mandal. All rights reserved.
        </p>
      </div>

      {/* ── Right / full-width form panel ─────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 lg:p-14 relative z-10 min-h-screen lg:min-h-0">
        {/* Theme toggle */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <div className="w-full max-w-md space-y-7">
          {/* Mobile-only logo */}
          <div className="flex flex-col items-center gap-4 text-center lg:hidden">
            <div
              className="flex items-center justify-center rounded-2xl p-3"
              style={{
                background: "var(--admin-surface)",
                border: "1px solid var(--admin-border)",
                boxShadow: "0 4px 24px rgba(91,94,248,0.12), 0 1px 4px rgba(0,0,0,0.08)",
                width: "200px",
                height: "72px",
              }}
            >
              <Image
                src="/assets/img/pravasi-mandal-logo.png"
                alt="Pravasi Mandal Logo"
                width={176}
                height={56}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[var(--admin-text)] tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-[var(--admin-text-muted)]">
              Sign in to access the admin panel
            </p>
          </div>

          {/* Glass card */}
          <div
            className="admin-glass rounded-2xl p-6 sm:p-8"
            style={{ boxShadow: "var(--admin-shadow-lg)" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {/* Server error */}
              {serverError && (
                <div className="flex items-start gap-2.5 rounded-xl bg-[var(--admin-error-soft)] border border-[var(--admin-error)]/25 px-4 py-3">
                  <AlertCircle className="h-4 w-4 text-[var(--admin-error)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--admin-error)] leading-relaxed">
                    {serverError}
                  </p>
                </div>
              )}

              {/* Email */}
              <Input
                label="Email address"
                type="email"
                placeholder="admin@pravasi.org"
                required
                error={errors.email?.message}
                {...register("email")}
                id="admin-email"
              />

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  error={errors.password?.message}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="p-0.5 pointer-events-auto text-[var(--admin-text-muted)] hover:text-[var(--admin-text)] transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  }
                  {...register("password")}
                  id="admin-password"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full mt-1"
                style={{
                  background: "linear-gradient(135deg, var(--admin-primary), var(--admin-primary-dark))",
                  boxShadow: isSubmitting ? "none" : "0 4px 20px var(--admin-primary-glow)",
                }}
                id="admin-login-submit"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Signing in…
                  </span>
                ) : (
                  "Sign in to Admin Panel"
                )}
              </Button>
            </form>
          </div>

          {/* Demo credentials */}
          <div className="rounded-xl border border-[var(--admin-border)] bg-[var(--admin-surface-2)]/60 px-4 py-3 text-xs text-[var(--admin-text-muted)] space-y-1">
            <p className="font-semibold text-[var(--admin-text-subtle)] uppercase tracking-widest text-[10px]">Demo Credentials</p>
            <div className="flex items-center justify-between">
              <span>Email:</span>
              <code className="text-[var(--admin-primary)] font-mono">admin@pravasi.org</code>
            </div>
            <div className="flex items-center justify-between">
              <span>Password:</span>
              <code className="text-[var(--admin-primary)] font-mono">admin123</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
