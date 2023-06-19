"use client";

import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteFromFirebase } from "@/utils/deleteFromFirebase";
import Link from "next/link";
import { Event } from "@/components/ui/columns";
import { EventForm } from "@/components/EventForm";
import { useState } from "react";

export const EventDropdown = ({ eventData }: { eventData: Event }) => {
  const [open, setOpen] = useState(false);
  const handleDialogClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Link href={`/event/${eventData.id}`} legacyBehavior>
              <a target="_blank">
                <DropdownMenuItem>View Event Page</DropdownMenuItem>
              </a>
            </Link>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                Edit
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add an event</DialogTitle>
                <DialogDescription>
                  Enter all event details here.
                </DialogDescription>
              </DialogHeader>
              <EventForm
                handleDialogClose={handleDialogClose}
                currentEventName={eventData.name}
                currentEventDate={eventData.date.toDate()}
                currentEventDescription={eventData.description}
                id={eventData.id}
              />
            </DialogContent>
            <DropdownMenuItem onClick={() => deleteFromFirebase(eventData.id)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dialog>
    </>
  );
};
