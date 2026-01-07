"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Accordion, FAQ, Input, Stat, Textarea, TrustItem } from "./Shared";
import {
  FaBolt,
  FaShieldAlt,
  FaQrcode,
  FaEnvelope,
  FaPlay,
  FaTools,
  FaClipboardList,
  FaRedoAlt,
  FaArrowRight,
  FaHardHat,
  FaSolarPanel,
  FaWind,
  FaBuilding,
  FaCheckCircle,
  FaFileExport,
  FaMapMarkedAlt,
} from "react-icons/fa";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
};
type Feature = {
  title: string;
  desc: string;
  bullets?: string[];
  img: string;
  icon?: React.ReactNode;
};
type Trade = { title: string; desc: string; icon: React.ReactNode };
type CompareCol = { title: string; items: string[]; highlight?: boolean };
const kitImages = {
  net: "https://images.unsplash.com/photo-1581091215367-59ab6bfc7a1a?auto=format&fit=crop&w=1400&q=80",
  strap:
    "https://images.unsplash.com/photo-1603570419989-8f8ef7c3b3a7?auto=format&fit=crop&w=1400&q=80",
  qr: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  bag: "https://images.unsplash.com/photo-1520975958225-02f1c1f3f158?auto=format&fit=crop&w=1400&q=80",
} as const;
function KitHoverGallery({ kitActive }: { kitActive: keyof typeof kitImages }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
      <div className="absolute left-5 top-5 z-10 rounded-full border border-white/30 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        Hover to see more
      </div>

      <img
        key={kitActive} // forces a clean swap
        src={kitImages[kitActive]}
        alt="Kit detail"
        className="h-[420px] w-full object-cover transition"
      />

      <div className="border-t border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold text-slate-600">
          Showing:{" "}
          <span className="text-slate-900">
            {kitActive === "net"
              ? "Safety Net"
              : kitActive === "strap"
              ? "Ratchet Strap"
              : kitActive === "qr"
              ? "QR Label"
              : "Storage Bag"}
          </span>
        </p>
      </div>
    </div>
  );
}
export function LandingSections() {
  const [kitActive, setKitActive] = useState<"net" | "strap" | "qr" | "bag">(
    "net"
  );

  const trades: Trade[] = useMemo(
    () => [
      {
        title: "Roofers",
        desc: "Protect crews during tearoff, installation, and maintenance on commercial properties with multiple skylight penetrations.",
        icon: <FaHardHat size={20} className="text-orange-500" />,
      },
      {
        title: "Solar Installers",
        desc: "Secure skylight openings before, during, and after panel installation to maintain continuous fall protection.",
        icon: <FaSolarPanel size={20} className="text-orange-500" />,
      },
      {
        title: "HVAC Contractors",
        desc: "Deploy rapid protection during rooftop service calls and equipment installations without lengthy setup time.",
        icon: <FaWind size={20} className="text-orange-500" />,
      },
      {
        title: "Safety Companies",
        desc: "Equip your fleet with documented, reusable protection that supports compliance and simplifies audit trails.",
        icon: <FaBuilding size={20} className="text-orange-500" />,
      },
    ],
    []
  );

  const features: Feature[] = useMemo(
    () => [
      {
        title: "Purpose-Built Sizing",
        desc: "Engineered specifically for the most common commercial skylight footprint so coverage is obvious, consistent, and inspector-friendly.",
        bullets: [
          "Precise fit for standard skylights",
          "High-visibility safety orange mesh",
          "UV-stabilized for outdoor use",
        ],
        img: "/net.png",
        icon: <FaShieldAlt size={18} className="text-orange-500" />,
      },
      {
        title: "Fast Strap-On Install",
        desc: "Secure the net in minutes using heavy-duty ratchet straps—no tools, no penetrations, no complicated assembly required.",
        bullets: [
          "One-person install in ~2 minutes",
          "Works with standard curb lip",
          "Moves site-to-site quickly",
        ],
        img: "/maninstall.png",
        icon: <FaBolt size={18} className="text-orange-500" />,
      },
      {
        title: "QR Inspection Logs",
        desc: "Each net includes a unique QR label. One scan registers installs, logs inspections, and creates an auditable record that proves compliance.",
        bullets: [
          "Instant digital documentation",
          "Track by job site or crew",
          "Exportable history (phase 2)",
        ],
        img: "/qr.png",
        icon: <FaQrcode size={18} className="text-orange-500" />,
      },
    ],
    []
  );

  const comparison: CompareCol[] = useMemo(
    () => [
      {
        title: "Typical Skylight Nets",
        items: [
          "Generic sizing requires field modifications",
          "No documentation or tracking capability",
          "Unknown UV resistance and service life",
          "No support for fleet management",
        ],
      },
      {
        title: "SkylightSafety.NET",
        highlight: true,
        items: [
          "Purpose-built for common commercial skylights",
          "QR code system for instant documentation",
          "UV-stabilized materials rated for rooftop exposure",
          "Portable, reusable across multiple jobs",
          "Fleet tracking support for rollouts",
        ],
      },
    ],
    []
  );

  const steps: Step[] = useMemo(
    () => [
      {
        num: "01",
        title: "Strap It On",
        desc: "Position the net over the skylight and secure it using the heavy-duty ratchet strap system. No tools. No penetrations.",
        icon: <FaTools className="text-orange-500" size={28} />,
      },
      {
        num: "02",
        title: "Scan the QR Code",
        desc: "Scan the unique QR label to register install location, date, and responsible crew member in seconds.",
        icon: <FaQrcode className="text-orange-500" size={28} />,
      },
      {
        num: "03",
        title: "Log and Redeploy",
        desc: "Track inspections during the project, log removal, and redeploy the net at the next job site with a clean audit trail.",
        icon: <FaRedoAlt className="text-orange-500" size={28} />,
      },
    ],
    []
  );

  const qrWays = useMemo(
    () => [
      {
        title: "Register Your Net",
        desc: "Assign each net to your company, crew, or project. Create accountability and reduce loss across job sites.",
        icon: <FaCheckCircle className="text-orange-500" size={22} />,
      },
      {
        title: "Log Inspections",
        desc: "Scan before each use and during periodic checks. Build an inspection history that proves due diligence.",
        icon: <FaClipboardList className="text-orange-500" size={22} />,
      },
      {
        title: "Document Installs",
        desc: "Capture who installed protection, where, and when. Create defendable evidence protection was in place.",
        icon: <FaShieldAlt className="text-orange-500" size={22} />,
      },
      {
        title: "Track Location",
        desc: "Know which job site or crew has each net. Simplify fleet management and keep equipment where you need it.",
        icon: <FaMapMarkedAlt className="text-orange-500" size={22} />,
      },
    ],
    []
  );

  const applications = useMemo(
    () => [
      {
        title: "New Construction",
        items: [
          "Protect skylight openings during initial roof construction",
          "Maintain protection during multi-phase builds",
        ],
      },
      {
        title: "Reroof + Replacement",
        items: [
          "Secure skylights during tearoff and installation phases",
          "Protect openings when replacing damaged skylights",
        ],
      },
      {
        title: "Maintenance + Service",
        items: [
          "Deploy protection during rooftop service calls",
          "Secure skylights for inspection and repair work",
        ],
      },
      {
        title: "Multi-Trade Projects",
        items: [
          "Coordinate fall protection when multiple crews are on the roof",
          "Document which trade installed/removed protection",
        ],
      },
    ],
    []
  );

  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "How long does installation take?",
        a: "A two-person crew can install a net in under ~5 minutes. Removal is equally fast—ideal for short-duration work and phased jobs.",
      },
      {
        q: "Do I need special tools?",
        a: "No tools required. The system is designed to strap on quickly without fasteners or roof penetrations.",
      },
      {
        q: "Can I move it from job to job?",
        a: "Yes. Remove it, log it, and redeploy across sites with QR-based records that keep compliance documentation consistent.",
      },
      {
        q: "Is this an anchorage / fall arrest device?",
        a: "No. This is fall-through protection for skylight openings and is not an anchorage device. Always follow your site safety plan and applicable regulations.",
      },
    ],
    []
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-slate-950" />
          <div className="absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-12 lg:py-10">
          <div className="text-center">
            <div className="mx-auto mb-6 w-32 sm:w-40">
              <img src="/logo.png" alt="Logo" className="w-full" />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Purpose-Built Skylight Fall-Through Protection
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              Installs in minutes. Moves job-to-job. Documented with one QR
              scan.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/details"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <FaArrowRight className="mr-2" size={18} />
                Order Online
              </Link>

              <a
                href="#video"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <FaPlay className="mr-2" size={16} />
                Installation Video
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-10 max-w-4xl">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-orange-500/20 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="/wideshot.png"
                alt="Workers on roof with skylight protection"
                className="h-[300px] w-full object-cover sm:h-[360px]"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-6xl">
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
              <TrustItem
                icon={<FaBolt className="text-orange-400" size={20} />}
                title="Fast Install"
                desc="Minutes, not hours."
              />
              <TrustItem
                icon={<FaShieldAlt className="text-orange-400" size={20} />}
                title="Zero Penetration"
                desc="No drilling. No damage."
              />
              <TrustItem
                icon={<FaQrcode className="text-orange-400" size={20} />}
                title="QR Compliance"
                desc="Log installs + inspections."
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Designed for the trades that work above
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Trusted Across the Commercial Trades
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
            Built for crews facing elevated hazards on real rooftops—roofing,
            solar, HVAC, and safety operations that need speed, strength, and
            documentation.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trades.map((t) => (
              <div
                key={t.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10">
                    {t.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISK FRAMING */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-600">
                Skylights are fall-through hazards
              </p>
              <h3 className="mt-3 text-xl font-extrabold tracking-tight sm:text-4xl">
                The risk is real.<br></br> The fix shouldn’t be complicated.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Commercial skylights create dangerous openings on rooftops where
                crews do critical work. Unprotected glazing becomes a high-risk
                fall-through zone—serious injury, liability exposure, citations,
                delays.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Catastrophic injury potential from fall-through incidents",
                  "Compliance exposure (citations/fines) from inadequate protection",
                  "Documentation gaps when inspectors arrive",
                  "Project delays when safety equipment isn’t ready",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-0.5 text-orange-500">●</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Every unprotected skylight is a liability waiting to happen.
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Proper protection costs a fraction of what one incident costs.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80"
                alt="Commercial roof work"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 CORE BENEFITS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Built for speed, strength, and accountability
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Three Pain Points. One Kit.
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-orange-500/10">
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-bold">{f.title}</h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {f.desc}
                  </p>

                  {f.bullets?.length ? (
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <FaCheckCircle
                            className="mt-0.5 text-orange-500"
                            size={14}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div className="px-6 pb-6">
                  <div className="overflow-hidden rounded-2xl bg-white">
                    <img
                      src={f.img}
                      alt=""
                      className="h-52 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/details"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Specs + QR Details <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Stop improvising. Start protecting.
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Proof Beats Promises
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {comparison.map((col) => (
              <div
                key={col.title}
                className={[
                  "rounded-3xl border p-6 shadow-sm",
                  col.highlight
                    ? "border-orange-200 bg-white"
                    : "border-slate-200 bg-white",
                ].join(" ")}
              >
                <h3 className="text-lg font-extrabold text-slate-900">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className={
                          col.highlight
                            ? "mt-0.5 text-orange-500"
                            : "mt-0.5 text-slate-400"
                        }
                      >
                        ●
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {col.highlight ? (
                  <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Purpose-built sizing. Rapid install. Documented
                      compliance.
                    </p>
                    <p className="mt-1 text-xs text-slate-700">
                      The system is designed to be obvious on the roof and
                      defendable in an audit.
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KIT / WHAT'S INCLUDED */}
      {/* KIT / WHAT'S INCLUDED (HOVER IMAGE SWAP) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT: Copy + Hover List */}
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-600">
                The most common commercial skylight size
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                A Kit Built for Real Job Sites
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Every component is selected for durability, ease of use, and
                rapid deployment. Built to be obvious on the roof and defendable
                in an audit.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="inline-flex h-6 items-center rounded-full border border-slate-200 bg-slate-50 px-3">
                  Hover to see more →
                </span>
              </div>

              {/* Hover targets */}
              <div className="mt-2 space-y-4">
                <button
                  type="button"
                  onMouseEnter={() => setKitActive("net")}
                  onFocus={() => setKitActive("net")}
                  className={[
                    "w-full text-left rounded-2xl border p-5 transition",
                    kitActive === "net"
                      ? "border-orange-200 bg-orange-50"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100",
                  ].join(" ")}
                >
                  <p className="text-sm font-bold text-slate-900">
                    High-Visibility Safety Net
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    UV-stabilized orange mesh sized for commercial skylights.
                  </p>
                </button>

                <button
                  type="button"
                  onMouseEnter={() => setKitActive("strap")}
                  onFocus={() => setKitActive("strap")}
                  className={[
                    "w-full text-left rounded-2xl border p-5 transition",
                    kitActive === "strap"
                      ? "border-orange-200 bg-orange-50"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100",
                  ].join(" ")}
                >
                  <p className="text-sm font-bold text-slate-900">
                    Heavy-Duty Ratchet Strap
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Secure attachment to standard curb lips—no tools, no
                    penetrations.
                  </p>
                </button>

                <button
                  type="button"
                  onMouseEnter={() => setKitActive("qr")}
                  onFocus={() => setKitActive("qr")}
                  className={[
                    "w-full text-left rounded-2xl border p-5 transition",
                    kitActive === "qr"
                      ? "border-orange-200 bg-orange-50"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100",
                  ].join(" ")}
                >
                  <p className="text-sm font-bold text-slate-900">
                    Serialized QR Label
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Scan to register, log inspections, and keep documentation
                    clean.
                  </p>
                </button>

                <button
                  type="button"
                  onMouseEnter={() => setKitActive("bag")}
                  onFocus={() => setKitActive("bag")}
                  className={[
                    "w-full text-left rounded-2xl border p-5 transition",
                    kitActive === "bag"
                      ? "border-orange-200 bg-orange-50"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100",
                  ].join(" ")}
                >
                  <p className="text-sm font-bold text-slate-900">
                    Storage Bag
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Keep kits organized between jobs and easy to transport.
                  </p>
                </button>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Important Safety Notice
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  This product helps prevent fall-through incidents at skylight
                  openings. It is NOT an anchorage device and must not be used
                  for personal fall arrest systems.
                </p>
              </div>
            </div>

            {/* RIGHT: Image that changes on hover */}
            <KitHoverGallery kitActive={kitActive} />
          </div>
        </div>
      </section>

      {/* 3-STEP DEPLOYMENT + AFTER YOU SCAN */}
      <section id="working-plan" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Installation in minutes, protection for the duration
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Three-Step Deployment
          </h2>

          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-stretch">
            {steps.map((s, idx) => (
              <React.Fragment key={s.num}>
                <div className="group relative flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 shadow-lg shadow-orange-500/25 transition group-hover:bg-orange-500/20 group-hover:shadow-xl group-hover:shadow-orange-500/40">
                        {s.icon}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold tracking-widest text-orange-600">
                        {s.num}
                      </p>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {idx < steps.length - 1 ? (
                  <div className="hidden items-center justify-center lg:flex lg:px-2">
                    <FaArrowRight className="text-slate-300" size={28} />
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">
                What happens after you scan
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The QR code creates a digital record that follows the net
                through its service life—timestamped, organized, and
                audit-ready.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {[
                  "Installation documentation: who installed it, where, and when",
                  "Inspection logs: pre-use checks and periodic assessments",
                  "Location tracking: which job site or crew has the net",
                  "Audit trail: exportable history for compliance reviews (phase 2)",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <FaCheckCircle
                      className="mt-0.5 text-orange-500"
                      size={14}
                    />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="video"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-extrabold">See it in action</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Drop your installation demo here (YouTube/Vimeo) or link out.
                Keep it dead-simple: show the strap system and the QR workflow.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                <FaPlay className="mr-2" size={16} />
                Watch Installation Video
              </a>

              <p className="mt-3 text-xs text-slate-500">
                Replace the{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5">href</code>{" "}
                with your video URL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR PROOF SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Documentation you can defend
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Four Ways QR Tracking Protects Your Business
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qrWays.map((x) => (
              <div
                key={x.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10">
                  {x.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {x.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">Sample inspection log</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Your records should look clean, organized, and exportable when
                project owners, auditors, or insurance carriers ask.
              </p>

              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-3 bg-slate-100 px-4 py-3 text-xs font-semibold text-slate-700">
                  <div>Date</div>
                  <div>Event</div>
                  <div>By</div>
                </div>
                {[
                  { d: "01/07", e: "Installed", b: "C. Rivera" },
                  { d: "01/09", e: "Inspection", b: "C. Rivera" },
                  { d: "01/12", e: "Inspection", b: "J. Kim" },
                  { d: "01/14", e: "Removed", b: "J. Kim" },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 px-4 py-3 text-xs text-slate-700"
                  >
                    <div>{r.d}</div>
                    <div>{r.e}</div>
                    <div>{r.b}</div>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Note: export/share formats (CSV/PDF) can be a phase 2 feature.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">
                From install to audit-ready
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                When an inspector arrives, “we always use protection” isn’t a
                system. QR logs are.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2">
                    <FaClipboardList className="text-orange-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      Timestamped records
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Every scan creates a time-stamped, structured record tied to
                    that net.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2">
                    <FaFileExport className="text-orange-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      Exportable history
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Give safety managers and clients the documentation they ask
                    for without scrambling.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  href="/details"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  QR Workflow Details <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE PROTECT + APPLICATIONS + SCAN TIMELINE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Who we protect
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Common Applications
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {applications.map((a) => (
              <div
                key={a.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900">
                  {a.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {a.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <FaCheckCircle
                        className="mt-0.5 text-orange-500"
                        size={14}
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
              From installation to audit-ready in three scans
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  n: "1",
                  t: "Scan at Install",
                  d: "Register location, crew, and date when net is deployed",
                },
                {
                  n: "2",
                  t: "Scan During Inspections",
                  d: "Log condition checks and maintain compliance records",
                },
                {
                  n: "3",
                  t: "Export for Audits",
                  d: "Generate reports proving protection was in place",
                },
              ].map((x) => (
                <div
                  key={x.n}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-sm font-extrabold text-white">
                      {x.n}
                    </div>
                    <p className="text-base font-bold text-slate-900">{x.t}</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {x.d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#bulk"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Get Bulk Pricing + Spec Sheet <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* BULK / FLEET CTA */}
      <section id="bulk" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-400">
                Outfitting your fleet?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Standardize Protection Across Crews
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200">
                We work with safety companies and large contractors to deploy
                standardized protection across multiple crews and projects. Get
                volume pricing and rollout support.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <Stat label="Standard size" value="4' × 8'" />
                <Stat label="Typical install" value="< 5 min" />
                <Stat label="Roof penetration" value="None" />
                <Stat label="QR tracking" value="Included" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-lg font-extrabold text-white">
                Talk to us about fleet rollouts
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Send crew count + typical job types and we’ll respond with
                pricing, lead times, and documentation details.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#request"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  <FaEnvelope className="mr-2" size={16} />
                  Request Bulk Pricing
                </a>

                <Link
                  href="/details"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Spec Sheet <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Common installation questions
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Questions, Answered
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <Accordion items={faqs} />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">Need deeper details?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The detailed page includes what’s included, QR logging
                workflows, and a simple comparison for safety managers and
                audits.
              </p>
              <Link
                href="/details"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                View Details <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST FORM (FINAL CTA) */}
      <section id="request" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-400">
                Get details, pricing, and availability
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Request Product Information
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200">
                Tell us about your job site and we’ll follow up with sizing,
                lead times, and compliance documentation.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <Stat label="Standard size" value="4' × 8'" />
                <Stat label="Typical install" value="< 5 min" />
                <Stat label="Roof penetration" value="None" />
                <Stat label="QR tracking" value="Included" />
              </div>
            </div>

            <form className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="First Name" placeholder="First Name" />
                <Input label="Last Name" placeholder="Last Name" />
                <Input label="Phone" placeholder="Phone Number" />
                <Input label="Email" placeholder="Email Address" />
                <div className="sm:col-span-2">
                  <Input
                    label="Company / Job Site"
                    placeholder="Company or Job Site"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Textarea
                    label="Message"
                    placeholder="Tell us what you need…"
                  />
                </div>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
              >
                Send Request <span className="ml-2">→</span>
              </button>

              <p className="mt-3 text-xs text-slate-300">
                UI only — wire to your backend (EmailJS, Formspree, API route,
                etc.).
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
