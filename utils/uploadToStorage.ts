import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase/config";

const photoMetadata = {
  contentType: "image/jpeg",
};

export const uploadPhoto = (
  id: string,
  file: any,
  fileType: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${id}-${fileType}.jpg`);
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
