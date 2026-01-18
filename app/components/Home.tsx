"use client";

import React, { useMemo, useState } from "react";
import { Hero } from "./homeSection/Hero";
import { WhoItsFor } from "./homeSection/WhoItsFor";
import { RiskFraming } from "./homeSection/RiskFraming";
import { CoreBenefits } from "./homeSection/CoreBenefits";
import { Comparison } from "./homeSection/Comparison";
import { OrderOnline } from "./homeSection/OrderOnline";
import { KitIncluded } from "./homeSection/KitIncluded";
import { DeploymentSteps } from "./homeSection/DeploymentSteps";
import { QRProof } from "./homeSection/QRProof";
import { Applications } from "./homeSection/Applications";
import { BulkFleet } from "./homeSection/BulkFleet";
import { FAQSection } from "./homeSection/FAQSection";
import { RequestForm } from "./homeSection/RequestForm";
import { FAQ } from "./Shared";
import { FaTools, FaQrcode, FaRedoAlt, FaCheckCircle } from "react-icons/fa";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

type QRWay = { title: string; desc: string; icon: React.ReactNode };

type Application = {
  title: string;
  items: string[];
};
export function Home() {
  const [kitActive, setKitActive] = useState<"net" | "strap" | "qr" | "bag">(
    "net"
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

  const qrWays: QRWay[] = useMemo(
    () => [
      {
        title: "Register Your Net",
        desc: "Assign each net to your company, crew, or project. Create accountability and reduce loss across job sites.",
        icon: <FaCheckCircle className="text-orange-500" size={22} />,
      },
      {
        title: "Log Inspections",
        desc: "Scan before each use and during periodic checks. Build an inspection history that proves due diligence.",
        icon: <FaCheckCircle className="text-orange-500" size={22} />,
      },
      {
        title: "Document Installs",
        desc: "Capture who installed protection, where, and when. Create defendable evidence protection was in place.",
        icon: <FaCheckCircle className="text-orange-500" size={22} />,
      },
      {
        title: "Track Location",
        desc: "Know which job site or crew has each net. Simplify fleet management and keep equipment where you need it.",
        icon: <FaCheckCircle className="text-orange-500" size={22} />,
      },
    ],
    []
  );

  const applications: Application[] = useMemo(
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
      <Hero />
      <WhoItsFor />
      <RiskFraming />
      <CoreBenefits />
      <Comparison />
      <OrderOnline />
      <KitIncluded kitActive={kitActive} setKitActive={setKitActive} />
      <DeploymentSteps steps={steps} />
      <QRProof qrWays={qrWays} />
      <Applications applications={applications} />
      <BulkFleet />
      <FAQSection faqs={faqs} />
      <RequestForm />
    </div>
  );
}
