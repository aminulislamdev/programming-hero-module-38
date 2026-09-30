"use client";

import { Suspense, useState } from "react";
import type { FormEvent } from "react";

import NextLink from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { signIn } from "@/lib/auth-client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import PasswordInput from "@/components/PasswordInput";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    try {
      const { data, error: authError } = await signIn.email({
        email,
        password,
      });

      if (authError) {
        setError(authError.message || "Invalid email or password");
        return;
      }

      if (data) {
        // Only allow internal relative callback paths.
        const safeCallbackUrl =
          callbackUrl.startsWith("/") && !callbackUrl.startsWith("//")
            ? callbackUrl
            : "/dashboard";

        router.push(safeCallbackUrl);
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-[#09090b] px-4 py-12 sm:px-6">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      {/* Main Container */}
      <div className="relative w-full max-w-md">

        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-xs font-medium tracking-wide text-accent">
              WELCOME BACK
            </span>
          </div>
        </div>

        {/* Sign In Card */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">

          {/* Header */}
          <div className="mb-8 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Sign in to continue your journey.
            </p>
          </div>

          {/* Form */}
          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(v) =>
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
                  ? null
                  : "Please enter a valid email address"
              }
            >
              <Label className="mb-2 text-sm font-medium text-zinc-200">
                Email Address
              </Label>

              <Input
                placeholder="john@example.com"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-zinc-800/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-accent"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              minLength={8}
            >
              <Label className="mb-2 text-sm font-medium text-zinc-200">
                Password
              </Label>

              <PasswordInput />

              <FieldError />
            </TextField>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
              >
                <span aria-hidden="true">!</span>
                <p>{error}</p>
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              isDisabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 font-semibold text-black transition duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </>
              )}
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-zinc-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Sign Up */}
          <p className="text-center text-sm text-zinc-400">
            Don&apos;t have an account?{" "}
            <NextLink
              href="/sign-up"
              className="font-semibold text-accent transition hover:text-white hover:underline"
            >
              Create an account
            </NextLink>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-zinc-600">
          Securely access your account and pick up where you left off.
        </p>
      </div>
    </main>
  );
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[80vh] items-center justify-center bg-[#09090b]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
        </div>
      }
    >
      <SignInForm />
    </Suspense>
  );
}
