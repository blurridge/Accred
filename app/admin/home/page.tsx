import { Event, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Event[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Rizzume: Cloutchasing to Success",
      description: "It is an event focusing on resumes.",
      guests: 32,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },{
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },{
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },{
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },{
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },{
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },{
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },{
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      description: "It is an event focusing on firebase.",
      guests: 1,
    },
    // ...
  ]
}

const Page = async () => {
  const data = await getData()
  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Page;
