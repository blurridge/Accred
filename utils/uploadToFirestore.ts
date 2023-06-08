import { FormType } from "@/components/EventForm";
import { db, storage } from "@/firebase/config";
import { Timestamp, addDoc, collection, updateDoc } from "firebase/firestore";
import { ref } from "firebase/storage";
import { parseCSV } from "./parseCSV";
import { uploadPDF, uploadPhoto } from "./uploadToStorage";

export type Guest = {
  name: string;
  email: string;
};

type InitialPayload = {
  eventName: string;
  description: string;
  eventDate: Timestamp;
  guestList: Guest[];
};

type FilePayload = {
  eventBanner: string;
  certificateTemplate: string;
};

export const sendDocumentToFirestore = async (payload: FormType) => {
  try {
    const parsedGuestList: Guest[] = await parseCSV(payload.guestList);
    const initialPayload: InitialPayload = {
      eventName: payload.eventName,
      description: payload.description,
      eventDate: Timestamp.fromDate(payload.eventDate),
      guestList: parsedGuestList,
    };
    const eventDocRef = await addDoc(collection(db, "events"), initialPayload);
    const eventBannerURL: string = await uploadPhoto(
      eventDocRef.id,
      payload.eventBanner,
    );
    const certificateTemplateURL: string = await uploadPDF(
      eventDocRef.id,
      payload.certificateTemplate,
    );
    const filePayload: FilePayload = {
      eventBanner: eventBannerURL,
      certificateTemplate: certificateTemplateURL,
    };
    await updateDoc(eventDocRef, filePayload);
    console.log("Event successfully uploaded to Firebase!");
  } catch (error: any) {
    console.error("Uploading event error occurred", error.message);
  }
};