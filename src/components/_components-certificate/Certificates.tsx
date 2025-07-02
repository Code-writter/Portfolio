"use client";

import React from "react";
import { Carousel, Card } from "./card-courosal";

const DummyContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-6 rounded-2xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-sans max-w-3xl mx-auto">
        This certificate demonstrates proficiency in the respective technology. Click to view full details and verification.
      </p>
    </div>
  );
};

const certificatesData = [
  {
    category: "Certification",
    title: "AWS Certified Cloud Practitioner",
    src: "/certificates/aws-certified-cloud-practitioner.png",
    content: <DummyContent />
  },
  {
    category: "Certification",
    title: "Microsoft Certified: Azure Fundamentals",
    src: "/certificates/azure-fundamentals.png",
    content: <DummyContent />
  },
  {
    category: "Web Development",
    title: "Advanced React Developer",
    src: "/certificates/react-certificate.png",
    content: <DummyContent />
  },
  {
    category: "Data Science",
    title: "Machine Learning Specialist",
    src: "/certificates/ml-specialist.png",
    content: <DummyContent />
  }
];

export default function CertificatesCarousel() {
  return (
    <div className="w-full py-12 md:py-16">
      <h2 className="max-w-7xl px-4 mx-auto text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-6">
        My Certifications
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <Carousel 
          items={certificatesData.map((card, index) => (
            <Card key={card.src} card={card} index={index} />
          ))} 
        />
      </div>
    </div>
  );
}
