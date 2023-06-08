import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/ui/columns";

const Page = () => {
  return (
    <>
      <div className="px-28 mx-auto py-2">
        <DataTable columns={columns} />
      </div>
    </>
  );
};

export default Page;
