'use client'

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useAuth() {
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();

  const logout = useCallback(async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          router.refresh();
        },
      },
    });
  }, [router]);

  return {
    user: session?.user ?? null,
    session,
    isLoggedIn: !!session,
    isPending,
    logout,
    refetch,
  };
}