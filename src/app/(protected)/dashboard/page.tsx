import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import NextLink from "next/link";
import {
  Person,
  Envelope,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Gear,
  ChartLine
} from "@gravity-ui/icons";
import SignOutButton from "./SignOutButton";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ===== Welcome Header ===== */}
        <section className="relative overflow-hidden rounded-3xl border border-accent/20 bg-linear-to-br from-accent/10 via-accent/5 to-transparent p-6 shadow-xl sm:p-8">
          <div className="relative z-10">
            <p className="mb-2 text-sm font-medium text-accent">
              Welcome back 👋
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hello, {user?.name || "User"}!
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              Welcome to your dashboard. Manage your account, view your
              activity, and keep everything organized from one place.
            </p>
          </div>

          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10" />
          <div className="absolute -bottom-20 right-20 h-52 w-52 rounded-full bg-accent/5" />
        </section>

        {/* ===== Stats ===== */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<ChartLine width={20} height={20} />}
            title="Account Status"
            value="Active"
            description="Your account is active"
          />

          <StatCard
            icon={<ShieldCheck width={20} height={20} />}
            title="Security"
            value="Protected"
            description="Your account is secure"
          />

          <StatCard
            icon={<Person width={20} height={20} />}
            title="Profile"
            value="Complete"
            description="Your profile is ready"
          />

          <StatCard
            icon={<Calendar width={20} height={20} />}
            title="Member"
            value={`Since ${new Date().getFullYear()}`}
            description="Thanks for joining us"
          />
        </section>

        {/* ===== Main Content ===== */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="rounded-2xl border border-white/10 bg-white/2 p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Profile Information
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Your account details
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Person width={20} height={20} />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <InfoRow
                icon={<Person width={20} height={20} />}
                label="Full Name"
                value={user?.name || "Not available"}
              />

              <InfoRow
                icon={<Envelope width={20} height={20} />}
                label="Email Address"
                value={user?.email || "Not available"}
              />

              <InfoRow
                icon={<ShieldCheck width={20} height={20} />}
                label="Account Status"
                value="Verified"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-white/10 bg-white/2 p-6">
            <h2 className="text-xl font-semibold text-white">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Manage your account quickly
            </p>

            <div className="mt-6 space-y-3">
              <QuickAction
                icon={<Person width={20} height={20} />}
                title="Edit Profile"
                description="Update your information"
                href="/settings"
              />

              <QuickAction
                icon={<Gear width={20} height={20} />}
                title="Settings"
                description="Manage preferences"
                href="/settings"
              />

              <SignOutButton />
            </div>
          </div>
        </section>

        {/* ===== Recent Activity ===== */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-white/2 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Recent Activity
              </h2>

              <p className="mt-1 text-sm text-zinc-400">
                Your latest account activity
              </p>
            </div>

            <ChartLine width={20} height={20} className="text-zinc-500" />
          </div>

          <div className="mt-6 divide-y divide-white/5">
            <ActivityItem
              title="Signed in successfully"
              description="You logged into your account"
              time="Just now"
            />

            <ActivityItem
              title="Profile accessed"
              description="Dashboard profile information viewed"
              time="Today"
            />

            <ActivityItem
              title="Account created"
              description="Your account was successfully created"
              time="Recently"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

/* ==================== Components ==================== */

function StatCard({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/2 p-5 transition hover:-translate-y-1 hover:border-accent/30">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
          {icon}
        </div>

        <ArrowRight width={16} height={16} className="text-zinc-500" />
      </div>

      <p className="mt-4 text-sm text-zinc-400">{title}</p>

      <h3 className="mt-1 text-2xl font-bold text-white">{value}</h3>

      <p className="mt-1 text-xs text-zinc-500">{description}</p>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white/3 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-zinc-300">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-zinc-500">{label}</p>
        <p className="truncate text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

function QuickAction({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <NextLink
      href={href}
      className="group flex w-full items-center gap-3 rounded-xl border border-white/10 p-3 text-left transition hover:border-accent/40 hover:bg-accent/5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition group-hover:bg-accent/10 group-hover:text-accent">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="truncate text-xs text-zinc-400">{description}</p>
      </div>

      <ArrowRight
        width={16}
        height={16}
        className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-accent"
      />
    </NextLink>
  );
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/10" />

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs text-zinc-400">{description}</p>
      </div>

      <span className="text-xs text-zinc-500">{time}</span>
    </div>
  );
}