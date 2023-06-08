import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EventForm } from "./EventForm";
import { useState } from "react";

export const AddEventBtn = () => {
  const [open, setOpen] = useState(false);
  const handleDialogClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add an event</DialogTitle>
          <DialogDescription>Enter all event details here.</DialogDescription>
        </DialogHeader>
        <EventForm handleDialogClose={handleDialogClose} />
      </DialogContent>
    </Dialog>
  );
};
