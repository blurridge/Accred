"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const fileValidator = (acceptedTypes: string[]) => (file: unknown) => {
  if (file === undefined) {
    throw new Error(`No file has been uploaded.`);
  }
  const fileType = (file as File).type;
  if (!acceptedTypes.includes(fileType)) {
    throw new Error(
      `Invalid file type. Only ${acceptedTypes.join(", ")} files are allowed.`
    );
  }
  return file as File;
};

const csvOrXlsxFile = z.custom<File>((file) => {
  return fileValidator([
    "text/csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ])(file);
});

const imageFile = z.custom<File>((file) => {
  return fileValidator(["image/jpeg", "image/png"])(file);
});

const pdfFile = z.custom<File>((file) => {
  return fileValidator(["application/pdf"])(file);
});

const formSchema = z.object({
  eventName: z
    .string({
      required_error: "An event name is required.",
    })
    .min(2)
    .max(50),
  description: z
    .string({
      required_error: "An event description is required.",
    })
    .min(2)
    .max(50),
  eventDate: z.date({
    required_error: "An event date is required.",
  }),
  guestList: csvOrXlsxFile,
  eventBanner: imageFile,
  certificateTemplate: pdfFile,
});

export function EventForm() {
  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleGuestList = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Get the selected file
      form.setValue("guestList", file); // Set the file as the value of guestList field
    }
  };

  const handleEventBanner = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Get the selected file
      form.setValue("eventBanner", file); // Set the file as the value of eventBanner field
    }
  };

  const handleCertificateTemplate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Get the selected file
      form.setValue("certificateTemplate", file); // Set the file as the value of eventBanner field
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Event Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventBanner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Banner</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".jpg,.png"
                  onChange={handleEventBanner}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="guestList"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Guest List</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".csv,.xlsx"
                  onChange={handleGuestList}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventBanner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certificate Template</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={handleCertificateTemplate}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="ml-auto" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
