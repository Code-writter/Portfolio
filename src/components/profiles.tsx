'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export function Profiles() {
  return (
    <div className="max-w-5xl mx-auto px-4  ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "LinkedIn",
    logo : "/linkedin-svgrepo-com.svg",
    description:
      "Let's connect on LinkedIn.",
    link: "https://linkedin.com/in/abhishektiwari007",
  },
  {
    title: "GitHub",
    logo : "/icons8-github.svg",
    description:
      "Let's connect on GitHub.",
    link: "https://github.com/Code-writter",
  },
  {
    title: "Twitter",
    logo : "/twitter-logo.svg",
    description:
      "Let's connect on Twitter.",
    link: "https://twitter.com/abhishektiwari007",
  },
  {
    title: "Microsoft Learn",
    logo : "/Microsoft_Logo.svg",
    description:
      "Check profile on Microsoft Learn.",
    link: "https://learn.microsoft.com/en-us/users/me/?tab=credentials-tab",
  },
  {
    title: "Cloud Skill Boost",
    logo : "/google-cloud-1.svg",
    description:
      "Check profile on Cloud Skill Boost.",
    link: "https://www.cloudskillsboost.google/public_profiles/e34684f1-b0dc-4e22-978c-c4262c750b6e",
  },
  {
    title: "Credly",
    logo : "/credly-svgrepo-com.svg",
    description:
      "Check profile on Credly.",
    link: "https://www.credly.com/users/abhishektiwari.007",
  },
];
