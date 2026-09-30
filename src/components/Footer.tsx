import NextLink from "next/link";
import { LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import type { SVGProps } from "react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Changelog", href: "/changelog" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
    { label: "Community", href: "/community" },
    { label: "Status", href: "/status" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "Cookies", href: "/cookies" },
  ],
};

const Discord = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
    <path
      d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
      fill="#5865F2"
    />
  </svg>
);

const socials = [
  { name: "GitHub", href: "https://github.com", Icon: LogoGithub },
  { name: "LinkedIn", href: "https://linkedin.com", Icon: LogoLinkedin },
  { name: "Discord", href: "https://discord.com", Icon: Discord },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#09090b]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto container px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          {/* Brand */}
          <div>
            <NextLink href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-black text-black">
                A
              </div>
              <span className="text-lg font-bold text-white">ACME</span>
            </NextLink>

            <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-400">
              Build faster. Achieve more. The all-in-one platform for modern
              teams.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <NextLink
                        href={link.href}
                        className="text-sm text-zinc-400 transition hover:text-accent"
                      >
                        {link.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {currentYear} ACME Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <NextLink href="/privacy" className="transition hover:text-accent">
              Privacy
            </NextLink>
            <NextLink href="/terms" className="transition hover:text-accent">
              Terms
            </NextLink>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}