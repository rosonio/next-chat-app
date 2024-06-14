import EmptyState from "@/components/empty-state";

const DashboardPage = async () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full w-full">
      <EmptyState />
    </div>
  );
};

export default DashboardPage;
