export const fetchImageSize = async (certificateTemplate: string) => {
  const img = new Image();
  img.src = certificateTemplate;
  await img.decode();
  return { width: img.width, height: img.height };
};
