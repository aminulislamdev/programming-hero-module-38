'use client'

import { useState } from "react";
import NextLink from "next/link";
import { useAuth } from "@/hooks/useAuth";
import UserMenu from "./UserMenu";


const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/dashboard", protected: true },
];


const SITE_NAME = "ACME";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, isPending } = useAuth();

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#09090b]/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 container items-center justify-between px-5 sm:px-8">
       
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* 👇 Logo + Site Name */}
          <NextLink href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-black text-black">
              A
            </div>
            <span className="text-base font-bold text-white">{SITE_NAME}</span>
          </NextLink>
        </div>

        {/* MIDDLE — Desktop nav links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            
            if (link.protected && !isLoggedIn) return null;

            return (
              <li key={link.href}>
                <NextLink
                  href={link.href}
                  className="text-sm text-zinc-400 transition hover:text-accent"
                >
                  {link.label}
                </NextLink>
              </li>
            );
          })}
        </ul>

        {/* RIGHT — Auth */}
        <div className="hidden items-center gap-4 md:flex">
          {isPending ? (
            <div className="h-9 w-9 animate-pulse rounded-full bg-white/10" />
          ) : isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <NextLink
                href="/sign-in"
                className="text-sm text-zinc-400 transition hover:text-accent"
              >
                Login
              </NextLink>
              <NextLink
                href="/sign-up"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
              >
                Get Started
              </NextLink>
            </>
          )}
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-white/10 md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => {
              if (link.protected && !isLoggedIn) return null;

              return (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-accent"
                  >
                    {link.label}
                  </NextLink>
                </li>
              );
            })}

            <li className="mt-2 border-t border-white/10 pt-3">
              {isLoggedIn ? (
                <div className="flex justify-center">
                  <UserMenu />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <NextLink
                    href="/sign-in"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-center text-sm text-zinc-400 hover:bg-white/5"
                  >
                    Login
                  </NextLink>
                  <NextLink
                    href="/sign-up"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg bg-accent px-3 py-2 text-center text-sm font-semibold text-black"
                  >
                    Get Started
                  </NextLink>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}