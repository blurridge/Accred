import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/ui/columns";

const Page = () => {
  return (
    <>
      <div className="h-full px-28 py-2">
        <DataTable columns={columns} />
      </div>
    </>
  );
};

export default Page;
