import { PropsWithChildren } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SessionContext from "@/utils/SessionContext";
import ActiveStatus from "@/components/active-status";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <SessionContext>
          <SpeedInsights />
          <Toaster />
          <ActiveStatus />
          {props.children}
        </SessionContext>
      </body>
    </html>
  );
}
