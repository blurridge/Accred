import imageCompression from "browser-image-compression";

export const compressBanner = async (eventBanner: File) => {
  const options = {
    maxSizeMB: 0.1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  try {
    const compressedBanner = await imageCompression(eventBanner, options);
    return compressedBanner;
  } catch (error) {
    console.log(error);
  }
};
