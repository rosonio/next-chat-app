import getUsers from "@/app/actions/getUsers";
import EmptyState from "@/components/empty-state";
import UserList from "@/components/user-components/user-list";

const DashboardPage = async () => {
  const users = await getUsers();
  return (
    <div className="hidden lg:block lg:pl-80 h-full w-full">
      <UserList items={users} />
      <EmptyState />
    </div>
  );
};

export default DashboardPage;
