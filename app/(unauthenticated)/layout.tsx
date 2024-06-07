import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import getSession from "../actions/getSession";

export default async function UnauthenticatedLayout(props: PropsWithChildren) {
  const session = await getSession();

  if (session) {
    redirect("/users");
  }

  return (
    <div className="h-full flex items-center justify-center">
      {props.children}
    </div>
  );
}
