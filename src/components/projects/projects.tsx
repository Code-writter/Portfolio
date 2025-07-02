"use client";
import React from "react";
import { LinkPreview } from "./link-preview";

export function Projects() {
  return (
    <div className="flex flex-col px-4 py-12">
      <h2 className="text-5xl font-bold text-center ">Projects</h2>
      <div className="flex justify-center items-center h-[20rem] flex-col">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p>
      </div>
    </div>
  );
}
