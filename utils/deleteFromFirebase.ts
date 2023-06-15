import { doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import { ref, deleteObject } from "firebase/storage";

export const deleteFromFirebase = async (id: string) => {
  const bannerRef = ref(storage, `${id}-banner.jpg`);
  const certRef = ref(storage, `${id}-cert.jpg`);
  try {
    await deleteDoc(doc(db, "events", id));
  } catch (error: any) {
    console.error("Deleting event error occurred", error.message);
  }
  deleteObject(bannerRef)
    .then(() => {
      console.log("Banner deleted successfully.");
    })
    .catch((error: any) => {
      console.log("Error deleting event banner: ", error.message);
    });
  deleteObject(certRef)
    .then(() => {
      console.log("Certificate deleted successfully.");
    })
    .catch((error: any) => {
      console.log("Error deleting certificate template: ", error.message);
    });
};
