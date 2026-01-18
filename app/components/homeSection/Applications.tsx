import { FaCheckCircle } from "react-icons/fa";

type Application = {
  title: string;
  items: string[];
};

export function Applications({ applications }: { applications: Application[] }) {
  return (
    <section style={{ backgroundColor: "#c0652c" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-center text-sm font-semibold tracking-wide text-black">
          Who we protect
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          Common Applications
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {applications.map((a) => (
            <div
              key={a.title}
              className="rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-white">{a.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {a.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <FaCheckCircle
                      className="mt-0.5 text-orange-400"
                      size={14}
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-500">
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
                className="rounded-2xl border border-orange-600/30 bg-black/40 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-sm font-extrabold text-white">
                    {x.n}
                  </div>
                  <p className="text-base font-bold text-white">{x.t}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#bulk"
            className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Get Bulk Pricing + Spec Sheet <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
