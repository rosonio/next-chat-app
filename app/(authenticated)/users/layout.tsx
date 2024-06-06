import Sidebar from "@/components/sidebar/sidebar";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import getSession from "../../actions/getSession";

export default async function AuthenticatedLayout(props: PropsWithChildren) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <Sidebar>
      <div className="h-full">{props.children}</div>
    </Sidebar>
  );
}
