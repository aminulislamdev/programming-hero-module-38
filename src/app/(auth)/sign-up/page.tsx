"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

import { signUp } from "@/lib/auth-client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import PasswordInput from "@/components/PasswordInput";

export default function SignUpPage() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    try {
      const { data, error: authError } = await signUp.email({
        name,
        email,
        password,
      });

      if (authError) {
        setError(authError.message || "Sign up failed. Please try again.");
        return;
      }

      if (data) {
        router.push("/dashboard");
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

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      {/* Sign Up Card */}
      <div className="relative w-full max-w-md">

        {/* Top Badge */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-xs font-medium tracking-wide text-accent">
              YOUR JOURNEY STARTS HERE
            </span>
          </div>
        </div>

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
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Create an account
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Join us today and get started on your journey.
            </p>
          </div>

          {/* Form */}
          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

            {/* Name */}
            <TextField isRequired name="name" minLength={3}>
              <Label className="mb-2 text-sm font-medium text-zinc-200">
                Full Name
              </Label>

              <Input
                placeholder="John Doe"
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-zinc-800/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-accent"
              />

              <FieldError />
            </TextField>

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
              validate={(v) =>
                /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(v)
                  ? null
                  : "Use at least 8 characters, 1 uppercase letter and 1 number"
              }
            >
              <Label className="mb-2 text-sm font-medium text-zinc-200">
                Password
              </Label>

              <PasswordInput />

              <Description className="mt-2 text-xs text-zinc-500">
                At least 8 characters, 1 uppercase letter and 1 number.
              </Description>

              <FieldError />
            </TextField>

            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
              >
                <span aria-hidden="true">!</span>
                <p>{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              isDisabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 font-semibold text-black transition duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
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

          {/* Sign In */}
          <p className="text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <NextLink
              href="/sign-in"
              className="font-semibold text-accent transition hover:text-white hover:underline"
            >
              Sign in
            </NextLink>
          </p>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center text-xs text-zinc-600">
          By creating an account, you agree to our terms and privacy policy.
        </p>
      </div>
    </main>
  );
}

