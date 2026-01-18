"use client";

import React from "react";
import Link from "next/link";

export function Layout({ children }: { children: React.ReactNode }) {
  const [docsOpen, setDocsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDocsOpen(false);
      }
    }

    if (docsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [docsOpen]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top bar - replace with your real header/nav if you have one */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500 text-sm font-extrabold text-white">
              SS
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">
                Skylight Safety
              </div>
              <div className="text-xs text-slate-500">SkylightSafety.net</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold sm:flex">
            <a
              className="text-slate-700 hover:text-slate-900"
              href="#working-plan"
            >
              How it Works
            </a>
            <a className="text-slate-700 hover:text-slate-900" href="#faq">
              FAQ
            </a>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDocsOpen(!docsOpen)}
                className="text-slate-700 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
              >
                Documents
                <svg
                  className={`w-4 h-4 transition-transform ${
                    docsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              {docsOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                  <a
                    href="/privacy-policy"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 first:rounded-t-lg"
                    onClick={() => setDocsOpen(false)}
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/refund-and-return-policy"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    onClick={() => setDocsOpen(false)}
                  >
                    Refund & Return Policy
                  </a>
                  <a
                    href="/shipping-policy"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    onClick={() => setDocsOpen(false)}
                  >
                    Shipping Policy
                  </a>
                  <a
                    href="/terms-and-conditions"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 last:rounded-b-lg"
                    onClick={() => setDocsOpen(false)}
                  >
                    Terms & Conditions
                  </a>
                </div>
              )}
            </div>
            <a
              className="rounded-xl bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
              href="#request"
            >
              Request Info →
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Skylight Safety</p>
            <div className="flex gap-4">
              <a className="hover:text-slate-900" href="/details">
                Details
              </a>
              <a className="hover:text-slate-900" href="/terms-and-conditions">
                Terms & Conditions
              </a>
              <a className="hover:text-slate-900" href="/contact-us">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
