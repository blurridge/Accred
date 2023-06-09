"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Timestamp } from "firebase/firestore";
import { EventDropdown } from "@/components/EventDropdown";

export type Event = {
  id: string;
  name: string;
  date: Timestamp;
  description: string;
  guests: number;
};

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date") as Timestamp;
      const seconds = date.seconds;
      const outputDate = new Date(seconds * 1000).toISOString().split("T")[0];
      return <div className="text-center">{outputDate}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "guests",
    header: "Guests",
    cell: ({ row }) => {
      return (
        <div className="bg-[#F0F1FA] text-center rounded-lg py-1">
          {row.getValue("guests")}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const event = row.original;
      return <EventDropdown id={event.id} />;
    },
  },
];
