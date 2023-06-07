import { DataTable } from "@/components/DataTable";
import { Event, columns } from "@/components/ui/columns";
import { Timestamp } from "firebase/firestore";

async function getData(): Promise<Event[]> {
  return [
    {
      id: "728ed52f",
      date: Timestamp.fromDate(new Date(2023, 4, 25)),
      name: "Rizzume: Cloutchasing to Success",
      description: "It is an event focusing on resumes.",
      guests: 32,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      date: Timestamp.fromDate(new Date(2023, 4, 23)),
      description: "It is an event focusing on Firebase.",
      guests: 1,
    },
    {
      id: "92c74a3e",
      name: "Web Development Workshop",
      date: Timestamp.fromDate(new Date(2023, 6, 10)),
      description: "Learn the basics of web development.",
      guests: 10,
    },
    {
      id: "f5b71e93",
      name: "Design Thinking Conference",
      date: Timestamp.fromDate(new Date(2023, 8, 5)),
      description: "Explore the principles of design thinking.",
      guests: 50,
    },
    {
      id: "8e9a6017",
      name: "Machine Learning Symposium",
      date: Timestamp.fromDate(new Date(2023, 10, 15)),
      description: "Discover the latest advancements in machine learning.",
      guests: 100,
    },
    {
      id: "1b7fd428",
      name: "Digital Marketing Seminar",
      date: Timestamp.fromDate(new Date(2023, 11, 1)),
      description: "Learn effective strategies for digital marketing.",
      guests: 20,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      date: Timestamp.fromDate(new Date(2023, 4, 23)),
      description: "It is an event focusing on Firebase.",
      guests: 1,
    },
    {
      id: "92c74a3e",
      name: "Web Development Workshop",
      date: Timestamp.fromDate(new Date(2023, 6, 10)),
      description: "Learn the basics of web development.",
      guests: 10,
    },
    {
      id: "f5b71e93",
      name: "Design Thinking Conference",
      date: Timestamp.fromDate(new Date(2023, 8, 5)),
      description: "Explore the principles of design thinking.",
      guests: 50,
    },
    {
      id: "8e9a6017",
      name: "Machine Learning Symposium",
      date: Timestamp.fromDate(new Date(2023, 10, 15)),
      description: "Discover the latest advancements in machine learning.",
      guests: 100,
    },
    {
      id: "1b7fd428",
      name: "Digital Marketing Seminar",
      date: Timestamp.fromDate(new Date(2023, 11, 1)),
      description: "Learn effective strategies for digital marketing.",
      guests: 20,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      date: Timestamp.fromDate(new Date(2023, 4, 23)),
      description: "It is an event focusing on Firebase.",
      guests: 1,
    },
    {
      id: "92c74a3e",
      name: "Web Development Workshop",
      date: Timestamp.fromDate(new Date(2023, 6, 10)),
      description: "Learn the basics of web development.",
      guests: 10,
    },
    {
      id: "f5b71e93",
      name: "Design Thinking Conference",
      date: Timestamp.fromDate(new Date(2023, 8, 5)),
      description: "Explore the principles of design thinking.",
      guests: 50,
    },
    {
      id: "8e9a6017",
      name: "Machine Learning Symposium",
      date: Timestamp.fromDate(new Date(2023, 10, 15)),
      description: "Discover the latest advancements in machine learning.",
      guests: 100,
    },
    {
      id: "1b7fd428",
      name: "Digital Marketing Seminar",
      date: Timestamp.fromDate(new Date(2023, 11, 1)),
      description: "Learn effective strategies for digital marketing.",
      guests: 20,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      date: Timestamp.fromDate(new Date(2023, 4, 23)),
      description: "It is an event focusing on Firebase.",
      guests: 1,
    },
    {
      id: "92c74a3e",
      name: "Web Development Workshop",
      date: Timestamp.fromDate(new Date(2023, 6, 10)),
      description: "Learn the basics of web development.",
      guests: 10,
    },
    {
      id: "f5b71e93",
      name: "Design Thinking Conference",
      date: Timestamp.fromDate(new Date(2023, 8, 5)),
      description: "Explore the principles of design thinking.",
      guests: 50,
    },
    {
      id: "8e9a6017",
      name: "Machine Learning Symposium",
      date: Timestamp.fromDate(new Date(2023, 10, 15)),
      description: "Discover the latest advancements in machine learning.",
      guests: 100,
    },
    {
      id: "1b7fd428",
      name: "Digital Marketing Seminar",
      date: Timestamp.fromDate(new Date(2023, 11, 1)),
      description: "Learn effective strategies for digital marketing.",
      guests: 20,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      date: Timestamp.fromDate(new Date(2023, 4, 23)),
      description: "It is an event focusing on Firebase.",
      guests: 1,
    },
    {
      id: "92c74a3e",
      name: "Web Development Workshop",
      date: Timestamp.fromDate(new Date(2023, 6, 10)),
      description: "Learn the basics of web development.",
      guests: 10,
    },
    {
      id: "f5b71e93",
      name: "Design Thinking Conference",
      date: Timestamp.fromDate(new Date(2023, 8, 5)),
      description: "Explore the principles of design thinking.",
      guests: 50,
    },
    {
      id: "8e9a6017",
      name: "Machine Learning Symposium",
      date: Timestamp.fromDate(new Date(2023, 10, 15)),
      description: "Discover the latest advancements in machine learning.",
      guests: 100,
    },
    {
      id: "1b7fd428",
      name: "Digital Marketing Seminar",
      date: Timestamp.fromDate(new Date(2023, 11, 1)),
      description: "Learn effective strategies for digital marketing.",
      guests: 20,
    },
    {
      id: "738ed52f",
      name: "Cooking it up with Firebase",
      date: Timestamp.fromDate(new Date(2023, 4, 23)),
      description: "It is an event focusing on Firebase.",
      guests: 1,
    },
    {
      id: "92c74a3e",
      name: "Web Development Workshop",
      date: Timestamp.fromDate(new Date(2023, 6, 10)),
      description: "Learn the basics of web development.",
      guests: 10,
    },
    {
      id: "f5b71e93",
      name: "Design Thinking Conference",
      date: Timestamp.fromDate(new Date(2023, 8, 5)),
      description: "Explore the principles of design thinking.",
      guests: 50,
    },
    {
      id: "8e9a6017",
      name: "Machine Learning Symposium",
      date: Timestamp.fromDate(new Date(2023, 10, 15)),
      description: "Discover the latest advancements in machine learning.",
      guests: 100,
    },
    {
      id: "1b7fd428",
      name: "Digital Marketing Seminar",
      date: Timestamp.fromDate(new Date(2023, 11, 1)),
      description: "Learn effective strategies for digital marketing.",
      guests: 20,
    },
  ];
}

const Page = async () => {
  const data = await getData();
  return (
    <>
      <div className="px-28 mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Page;
