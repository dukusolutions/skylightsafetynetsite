import React from "react";
import { FaHardHat, FaSolarPanel, FaWind, FaBuilding } from "react-icons/fa";

type Trade = { title: string; desc: string; icon: React.ReactNode };

export function WhoItsFor() {
  const trades: Trade[] = [
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
  ];

  return (
    <section style={{ backgroundColor: "#c0652c" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-center text-sm font-semibold tracking-wide text-black">
          Designed for the trades that work above
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          Trusted Across the Commercial Trades
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-black/90">
          Built for crews facing elevated hazards on real rooftops—roofing,
          solar, HVAC, and safety operations that need speed, strength, and
          documentation.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trades.map((t) => (
            <div
              key={t.title}
              className="rounded-3xl bg-[#3D2C28] p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 ">
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {t.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
