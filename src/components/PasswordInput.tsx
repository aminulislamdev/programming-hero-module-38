"use client";

import { useState } from "react";
import { Input } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";

interface PasswordInputProps {
  name?: string;
  placeholder?: string;
}

export default function PasswordInput({
  name = "password",
  placeholder = "Enter your password",
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        name={name}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        autoComplete="current-password"
        className="w-full! min-w-0 rounded-xl! border! border-white/10! bg-zinc-800/70! pr-12! text-sm! text-white! shadow-none! transition placeholder:text-zinc-500! focus-within:border-accent!"
      />

      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        aria-label={show ? "Hide password" : "Show password"}
        aria-pressed={show}
        className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {show ? (
          <EyeSlash width={18} height={18} />
        ) : (
          <Eye width={18} height={18} />
        )}
      </button>
    </div>
  );
}
