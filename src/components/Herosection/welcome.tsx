import React from "react";
import { TextHoverEffect } from "./text-hover-effect";

export function Welcome() {
  return (
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="WELCOME" />
    </div>
  );
}
