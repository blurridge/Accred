export const calculateLuminance = (r: number, g: number, b: number): number => {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

export const getTextColor = (r: number, g: number, b: number): string => {
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new Error("Invalid RGB component values");
  }
  return calculateLuminance(r, g, b) > 0.5 ? "#000000" : "#ffffff";
};
