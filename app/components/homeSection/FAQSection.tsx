import Link from "next/link";
import { Accordion, FAQ } from "../Shared";

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section id="faq" className="relative" style={{ backgroundColor: "#c0652c" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-center text-sm font-semibold tracking-wide text-black">
          Common installation questions
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          Questions, Answered
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <Accordion items={faqs} />
          </div>

          <div className="rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-white">
              Need deeper details?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              The detailed page includes what&#39;s included, QR logging
              workflows, and a simple comparison for safety managers and
              audits.
            </p>
            <Link
              href="/products-and-services"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/80"
            >
              View Details <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
