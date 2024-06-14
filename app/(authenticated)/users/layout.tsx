import getUsers from "@/app/actions/getUsers";
import Sidebar from "@/components/sidebar/sidebar";
import UserList from "@/components/user-components/user-list";
import { PropsWithChildren } from "react";

export default async function AuthenticatedLayout(props: PropsWithChildren) {
  const users = await getUsers();
  return (
    <Sidebar>
      <UserList items={users} />
      <div className="h-full">{props.children}</div>
    </Sidebar>
  );
}
