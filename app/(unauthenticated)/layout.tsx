"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren, Suspense } from "react";

export default function UnauthenticatedLayout(props: PropsWithChildren) {
  const router = useRouter();
  const session = useSession();

  if (session?.status === "authenticated") {
    router.push("/users");
  }
  return (
    <Suspense>
      <div className="h-full flex items-center justify-center">
        {props.children}
      </div>
    </Suspense>
  );
}
