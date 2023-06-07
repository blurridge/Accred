"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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

const ACCEPTED_EVENT_BANNER_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const ACCEPTED_GUEST_LIST_TYPES = [
  "text/csv",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
const ACCEPTED_CERTIFICATE_TEMPLATE_TYPES = ["application/pdf"];

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
  guestList: z
    .any()
    .refine(
      (file) => ACCEPTED_GUEST_LIST_TYPES.includes(file?.type),
      "Only .csv, and .xlsx file types are supported."
    ),
  eventBanner: z
    .any()
    .refine(
      (file) => ACCEPTED_EVENT_BANNER_TYPES.includes(file?.type),
      "Only .jpeg, .jpg, and .png file types are supported."
    ),
  certificateTemplate: z
    .any()
    .refine(
      (file) => ACCEPTED_CERTIFICATE_TEMPLATE_TYPES.includes(file?.type),
      "Only .pdf file types are supported."
    ),
});

export type FormType = z.infer<typeof formSchema>;

export function EventForm() {
  // Define your form.
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { formState } = form; // Destructure from form the form state which tells us if form is valid or not.

  // Define a submit handler.
  function onSubmit(values: FormType) {
    console.log(values);
  }

  const handleGuestList = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Get the selected file
      form.setValue("guestList", file); // Set the file as the value of guestList field
      form.trigger("guestList");
    }
  };

  const handleEventBanner = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Get the selected file
      form.setValue("eventBanner", file); // Set the file as the value of eventBanner field
      form.trigger("eventBanner");
    }
  };

  const handleCertificateTemplate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Get the selected file
      form.setValue("certificateTemplate", file); // Set the file as the value of eventBanner field
      form.trigger("certificateTemplate");
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
                <Input type="file" onChange={handleEventBanner} />
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
                <Input type="file" onChange={handleGuestList} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="certificateTemplate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certificate Template</FormLabel>
              <FormControl>
                <Input type="file" onChange={handleCertificateTemplate} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
