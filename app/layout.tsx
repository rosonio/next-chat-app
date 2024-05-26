import { PropsWithChildren } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {props.children}
      </body>
    </html>
  );
}
