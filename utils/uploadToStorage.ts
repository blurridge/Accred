import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

const photoMetadata = {
  contentType: "image/jpeg",
};

const pdfMetadata = {
  contentType: "application/pdf",
};

export const uploadPhoto = (id: string, file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${id}-banner.jpg`);
    const uploadTask = uploadBytesResumable(storageRef, file, photoMetadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error.code);
        reject(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};

export const uploadPDF = (id: string, file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${id}-cert.pdf`);
    const uploadTask = uploadBytesResumable(storageRef, file, pdfMetadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error.code);
        reject(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};
