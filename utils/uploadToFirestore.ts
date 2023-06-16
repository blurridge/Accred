import { FormType } from "@/components/EventForm";
import { db } from "@/firebase/config";
import { Timestamp, addDoc, collection, updateDoc } from "firebase/firestore";
import { parseCSV } from "@/utils/parseCSV";
import { uploadPhoto } from "@/utils/uploadToStorage";
import { compressBanner } from "@/utils/compressBanner";

export type Guest = {
  name: string;
  email: string;
  certId: string;
};

export type InitialPayload = {
  eventName: string;
  description: string;
  eventDate: Timestamp;
  guestList: Guest[];
};

export type FilePayload = {
  eventBanner: string;
  certificateTemplate: string;
};

export const sendDocumentToFirestore = async (payload: FormType) => {
  try {
    const parsedGuestList: Guest[] = await parseCSV(payload.guestList); // Convert .csv file to JSON format
    const initialPayload: InitialPayload = {
      // Initial payload are non-file uploads.
      eventName: payload.eventName,
      description: payload.description,
      eventDate: Timestamp.fromDate(payload.eventDate),
      guestList: parsedGuestList,
    };
    const eventDocRef = await addDoc(collection(db, "events"), initialPayload); // Once payload has been added, proceed to storage file uploads.
    // Compress event banner to ensure fast loading of event page. It is blurred so losing quality is fine.
    const compressedBanner = await compressBanner(payload.eventBanner);
    const eventBannerURL: string = await uploadPhoto(
      eventDocRef.id,
      compressedBanner,
      "banner"
    );
    const certificateTemplateURL: string = await uploadPhoto(
      eventDocRef.id,
      payload.certificateTemplate,
      "cert"
    );
    const filePayload: FilePayload = {
      eventBanner: eventBannerURL,
      certificateTemplate: certificateTemplateURL,
    };
    await updateDoc(eventDocRef, filePayload); // Update document using eventDocRef so downloadURLs to files are added to Firestore doc.
    console.log("Event successfully uploaded to Firebase!");
  } catch (error: any) {
    console.error("Uploading event error occurred", error.message);
  }
};
