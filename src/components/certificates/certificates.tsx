"use client";

import React from "react";
import { Carousel, Card } from "./cards-carousel";

export function Certificates() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full py-12">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8 text-center">
        Certifications & Achievements
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const CertificateContent = ({ logo }: { logo: string }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white p-4 text-center">
      <div className="flex-1 flex items-center justify-center">
        <img 
          src={logo} 
          alt="Certificate Logo" 
          className="max-h-[80px] w-auto object-contain"
        />
      </div>
    </div>
  );
};

const MicrosoftCertificates = () => {
  return (
    <div className="w-full h-full p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">Microsoft Certifications</h3>
          <p className="text-gray-300 mt-2">Professional achievements in Microsoft technologies</p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-4">AI-102: Microsoft Azure AI Engineer Associate</h4>
            <div className="flex justify-center">
              <img 
                src="/certificates/AI-102.png" 
                alt="AI-102 Certificate"
                 
                className="max-w-full h-auto border border-gray-700 rounded shadow-lg"
              />
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-4">AI-900: Microsoft Azure AI Fundamentals</h4>
            <div className="flex justify-center">
              <img 
                src="/certificates/AI-900.png" 
                alt="AI-900 Certificate" 
                className="max-w-full h-auto border border-gray-700 rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoogleCloudCertificates = () => {
  return (
    <div className="w-full h-full p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">Google Cloud Certifications</h3>
          <p className="text-gray-300 mt-2">Professional achievements in Google Cloud technologies</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Google Data Analytics Professional Certificate</h4>
          <div className="flex justify-center">
            <img 
              src="/certificates/google-data-analyst.png" 
              alt="Google Data Analyst Certificate" 
              className="max-w-full h-auto border border-gray-700 rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const UdemyCertificates = () => {
  return (
    <div className="w-full h-full p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">Udemy Courses</h3>
          <p className="text-gray-300 mt-2">Professional development through online learning</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Git for Beginners: Learn Git Version Control</h4>
          <div className="flex justify-center">
            <img 
              src="/certificates/git_for_beginners.png" 
              alt="Git for Beginners Certificate" 
              className="max-w-full h-auto border border-gray-700 rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AllCertificates = () => {
  return (
    <div className="w-full h-full p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">Web Development Certificates</h3>
          <p className="text-gray-300 mt-2">Comprehensive web development achievements</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Web Development Professional Certificate</h4>
          <div className="flex justify-center">
            <img 
              src="/certificates/WebDev.png" 
              alt="Web Development Certificate" 
              className="max-w-full h-auto border border-gray-700 rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Microsoft Certified",
    src: "/Microsoft_Logo.svg",
    logo: "/Microsoft_Logo.svg",
    content: <MicrosoftCertificates />,
  },
  {
    title: "Google Cloud Certificates",
    src: "/google-cloud-1.svg",
    logo: "/google-cloud-1.svg",
    content: <GoogleCloudCertificates />,
  },
  {
    title: "Udemy Certificates",
    src: "/udemy-3.svg",
    logo: "/udemy-3.svg",
    content: <UdemyCertificates />,
  },
  {
    title: "Coursera Certificates",
    src: "/Coursera--Streamline-Svg-Logos.svg",
    logo: "/Coursera--Streamline-Svg-Logos.svg",
    content: <CertificateContent logo="/Coursera--Streamline-Svg-Logos.svg" />,
  },
  {
    title: "All Certificates",
    src: "/certificate-medal-svgrepo-com.svg",
    logo: "/certificate-medal-svgrepo-com.svg",
    content: <AllCertificates />,
  },
];
