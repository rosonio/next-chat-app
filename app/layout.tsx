"use client";

import { PropsWithChildren } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
      <Toaster />
    </html>
  );
}
