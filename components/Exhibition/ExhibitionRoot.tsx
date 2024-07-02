"use client";

import { ReactNode, useState } from "react";

interface ExhibitionRootProps {
    children: ReactNode
}

export default function ExhibitionRoot({children}: ExhibitionRootProps) {

  return (
    <section id="exhibition" className="_section min-h-[50vh] max-h-[100vh] h-screen z-10 relative overflow-hidden bg-black">
      <div className="w-full h-[80vh] flex items-center justify-center flex-col">
        {children}
      </div>
    </section>
  );
}
