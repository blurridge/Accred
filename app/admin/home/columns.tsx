"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Event = {
  id: string
  name: string
  date: Date
  description: string
  guests: number
}

export const columns: ColumnDef<Event>[] = [
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
  },
]
