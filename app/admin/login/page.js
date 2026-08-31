"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { login } from "@/store/slices/authSlice";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { Button } from "@/app/admin/components/ui/Button";
import { Input } from "@/app/admin/components/ui/Input";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/app/admin/components/ThemeToggle";

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
    <div className="admin-root min-h-screen flex items-center justify-center p-4 relative">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Theme toggle — top right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-sm space-y-6 relative z-10">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center h-24 w-56 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] p-2 shrink-0">
            <Image
              src="/assets/img/pravasi-mandal-logo.png"
              alt="Pravasi Mandal Logo"
              width={200}
              height={80}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[var(--admin-text)] tracking-tight">
              Admin Panel
            </h1>
            <p className="text-sm text-[var(--admin-text-muted)] mt-0.5">
              Sign in to continue
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[var(--admin-border)] bg-[var(--admin-surface)] shadow-[var(--admin-shadow-lg)] p-6">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            {/* Server error */}
            {serverError && (
              <div className="flex items-start gap-2.5 rounded-lg bg-[var(--admin-error-soft)] border border-[var(--admin-error)]/30 px-3 py-2.5">
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
                    className="p-0.5 pointer-events-auto"
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
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full mt-2"
              id="admin-login-submit"
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
                  Signing in…
                </span>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </div>

        {/* Demo credentials hint */}
        <p className="text-center text-xs text-[var(--admin-text-subtle)]">
          Demo: <span className="text-[var(--admin-text-muted)]">admin@pravasi.org</span>{" "}
          /{" "}
          <span className="text-[var(--admin-text-muted)]">admin123</span>
        </p>
      </div>
    </div>
  );
}
