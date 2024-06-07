import Sidebar from "@/components/sidebar/sidebar";
import { PropsWithChildren } from "react";

export default async function AuthenticatedLayout(props: PropsWithChildren) {
  return (
    <Sidebar>
      <div className="h-full">{props.children}</div>
    </Sidebar>
  );
}
