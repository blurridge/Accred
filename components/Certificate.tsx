"use client";

import { Page, Image, Text, Document, StyleSheet } from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import { fetchImageSize } from "@/utils/fetchImageSize";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  image: {
    flexGrow: 1,
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});

const Certificate = ({
  certificateTemplate,
  guestName,
}: {
  certificateTemplate: string;
  guestName: string;
}) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getImageSize = async () => {
      const size = await fetchImageSize(certificateTemplate);
      setImageSize(size);
    };
    getImageSize();
  }, [certificateTemplate]);

  const { width, height } = imageSize;
  return (
    <Document>
      <Page size={[width, height]} style={styles.page}>
        <Image src={certificateTemplate} style={styles.image} />
        <Text style={styles.text}>{guestName}</Text>
      </Page>
    </Document>
  );
};

export default Certificate;
