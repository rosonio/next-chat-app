"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default function UnauthenticatedLayout(props: PropsWithChildren) {
  const session = useSession();

  if (session.status === "authenticated") {
    redirect("/dashboard");
  }

  return (
    <div className="h-full flex items-center justify-center">
      {props.children}
    </div>
  );
}
