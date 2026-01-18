import { Stat } from "../Shared";
import { Input } from "../Shared";
import { Textarea } from "../Shared";

export function RequestForm() {
  return (
    <>
      {/* REQUEST FORM (FINAL CTA) */}
      <section id="request" className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-500">
                Get details, pricing, and availability
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Request Product Information
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-200">
                Tell us about your job site and we'll follow up with sizing,
                lead times, and compliance documentation.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-3xl border border-gray-700 bg-black/40 p-6">
                <Stat label="Standard size" value="4' × 8'" />
                <Stat label="Typical install" value="< 5 min" />
                <Stat label="Roof penetration" value="None" />
                <Stat label="QR tracking" value="Included" />
              </div>
            </div>

            <form className="rounded-3xl border border-gray-700 bg-black/40 p-6 shadow-xl">
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

              <p className="mt-3 text-xs text-gray-400">
                UI only — wire to your backend (EmailJS, Formspree, API route,
                etc.).
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
