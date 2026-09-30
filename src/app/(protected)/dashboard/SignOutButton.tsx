'use client'

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRightFromSquare } from "@gravity-ui/icons";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          router.refresh();
        },
      },
    });
  };

  return (
    <button
      onClick={handleSignOut}
      disabled={loading}
      className="group flex w-full items-center gap-3 rounded-xl border border-white/10 p-3 text-left transition hover:border-red-500/40 hover:bg-red-500/5 disabled:opacity-50"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition group-hover:bg-red-500/10 group-hover:text-red-400">
        <ArrowRightFromSquare width={20} height={20} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">
          {loading ? "Signing out..." : "Sign Out"}
        </p>
        <p className="truncate text-xs text-zinc-400">
          Logout from your account
        </p>
      </div>

      <ArrowRightFromSquare
        width={16}
        height={16}
        className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-red-400"
      />
    </button>
  );
}