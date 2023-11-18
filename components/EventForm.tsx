"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  editDocumentInFirestore,
  sendDocumentToFirestore,
} from "@/utils/uploadToFirestore";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ButtonRingLoader } from "./RingLoader";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useState } from "react";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const ACCEPTED_GUEST_LIST_TYPES = ["text/csv"];

const addingFormSchema = z.object({
  eventName: z
    .string({
      required_error: "An event name is required.",
    })
    .min(2, { message: "Event name must must be 2 or more characters long." })
    .max(50, {
      message: "Event name must must be 50 or less characters long.",
    }),
  description: z
    .string({
      required_error: "An event description is required.",
    })
    .min(2, {
      message: "Event description must must be 2 or more characters long.",
    })
    .max(50, {
      message: "Event description must must be 50 or less characters long.",
    }),
  eventDate: z.date({
    required_error: "An event date is required.",
  }),
  guestList: z
    .any()
    .refine(
      (file) => ACCEPTED_GUEST_LIST_TYPES.includes(file?.type),
      "Only .csv file types are supported."
    ),
  eventBanner: z
    .any()
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpeg, .jpg, and .png file types are supported."
    ),
  certificateTemplate: z
    .any()
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpeg, .jpg, and .png file types are supported."
    ),
  certificateTextColor: z.string({
    required_error: "A text color is required.",
  }),
});

const editingFormSchema = z.object({
  eventName: z
    .string({
      required_error: "An event name is required.",
    })
    .min(2, { message: "Event name must must be 2 or more characters long." })
    .max(50, {
      message: "Event name must must be 50 or less characters long.",
    }),
  description: z
    .string({
      required_error: "An event description is required.",
    })
    .min(2, {
      message: "Event description must must be 2 or more characters long.",
    })
    .max(50, {
      message: "Event description must must be 50 or less characters long.",
    }),
  eventDate: z.date({
    required_error: "An event date is required.",
  }),
  guestList: z
    .any()
    .refine(
      (file) => ACCEPTED_GUEST_LIST_TYPES.includes(file?.type),
      "Only .csv file types are supported."
    )
    .optional(),
  eventBanner: z
    .any()
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpeg, .jpg, and .png file types are supported."
    )
    .optional(),
  certificateTemplate: z
    .any()
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpeg, .jpg, and .png file types are supported."
    )
    .optional(),
  certificateTextColor: z.string({
    required_error: "A text color is required.",
  }),
});

export type FormType = z.infer<typeof addingFormSchema>;
export type OptionalFormType = z.infer<typeof editingFormSchema>;

type EventFormProps = {
  handleDialogClose: () => void;
  handleDropdownClose?: () => void;
  currentEventName?: string;
  currentEventDescription?: string;
  currentEventDate?: Date;
  id?: string;
};

export const EventForm = ({
  handleDialogClose,
  handleDropdownClose,
  currentEventName,
  currentEventDescription,
  currentEventDate,
  id,
}: EventFormProps) => {
  // Define your form.
  const currentResolver = id ? editingFormSchema : addingFormSchema;
  const form = useForm<FormType>({
    resolver: zodResolver(currentResolver),
    mode: "onChange",
    defaultValues: {
      eventName: currentEventName || "",
      description: currentEventDescription || "",
      eventDate: currentEventDate || undefined,
      certificateTextColor: "#FFFFFF",
    },
  });

  const { formState } = form; // Destructure from form the form state which tells us if form is valid or not.
  const [color, setColor] = useState("#FFFFF"); // Text color for certificate state.

  // Define a submit handler.
  const onSubmit = async (payload: FormType) => {
    if (id) {
      await editDocumentInFirestore({ payload, id });
    } else {
      await sendDocumentToFirestore(payload);
    }
    handleDialogClose();
    if (handleDropdownClose !== undefined) {
      handleDropdownClose();
    }
  };

  const handleGuestList = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Get the selected file
      form.setValue("guestList", file); // Set the file as the value of guestList field
      form.trigger("guestList"); // Manually triggering validation because of custom <Input /> component
    }
  };

  const handleEventBanner = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Get the selected file
      form.setValue("eventBanner", file); // Set the file as the value of eventBanner field
      form.trigger("eventBanner"); // Manually triggering validation because of custom <Input /> component
    }
  };

  const handleCertificateTemplate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Get the selected file
      form.setValue("certificateTemplate", file); // Set the file as the value of certificateTemplate field
      form.trigger("certificateTemplate"); // Manually triggering validation because of custom <Input /> component
    }
  };

  const handleCertificateTextColor = (newColor: string) => {
    setColor(newColor);
    form.setValue("certificateTextColor", newColor);
    form.trigger("certificateTextColor");
  };

  const handleInputColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);
    form.setValue("certificateTextColor", newColor);
    form.trigger("certificateTextColor");
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
        <FormField
          control={form.control}
          name="certificateTextColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certificate Text Color</FormLabel>
              <FormControl>
                <HexColorPicker
                  color={color}
                  onChange={handleCertificateTextColor}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="certificateTextColor"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} onChange={handleInputColorChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {formState.isSubmitting ? (
          <Button disabled>
            <ButtonRingLoader />
          </Button>
        ) : (
          <Button type="submit" disabled={!formState.isValid}>
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};
