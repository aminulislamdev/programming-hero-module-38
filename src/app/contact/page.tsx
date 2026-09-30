'use client'

import { useState } from "react";
import { Button, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import { Envelope, MapPin, Handset } from "@gravity-ui/icons";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="relative min-h-screen bg-[#09090b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.06),transparent_55%)]" />

      <section className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent">
            CONTACT
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Get in touch.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Have a question? We&apos;d love to hear from you. We&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          {/* Info */}
          <div className="space-y-6">
            {[
              { Icon: Envelope, label: "Email", value: "hello@acme.com" },
              { Icon: Handset, label: "Phone", value: "+1 (555) 123-4567" },
              { Icon: MapPin, label: "Office", value: "123 Main St, San Francisco" },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/2 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-accent">
                  <Icon width={18} height={18} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="mt-1 text-sm font-medium text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-2xl">
                  ✅
                </div>
                <h3 className="mt-4 text-lg font-semibold">Message sent!</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <TextField isRequired name="name">
                  <Label>Name</Label>
                  <Input placeholder="John Doe" />
                </TextField>

                <TextField isRequired name="email" type="email">
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" />
                </TextField>

                <TextField isRequired name="subject">
                  <Label>Subject</Label>
                  <Input placeholder="How can we help?" />
                </TextField>

                <TextField isRequired name="message">
                  <Label>Message</Label>
                  <TextArea placeholder="Write your message..." rows={5} />
                </TextField>

                <Button
                  type="submit"
                  className="rounded-xl bg-accent py-6 font-semibold text-black hover:brightness-110"
                >
                  Send Message →
                </Button>
              </Form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}