"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface SessionContextProps {
  children: React.ReactNode;
}

export default function SessionContext({ children }: SessionContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
