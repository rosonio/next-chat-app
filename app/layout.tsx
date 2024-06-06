import { PropsWithChildren } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SessionContext from "@/utils/SessionContext";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <SessionContext>
          <Toaster />
          {props.children}
        </SessionContext>
      </body>
    </html>
  );
}
