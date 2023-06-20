"use client";

import Certificate from "@/components/Certificate";
import { RingLoader } from "@/components/RingLoader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { db } from "@/firebase/config";
import { PDFViewer } from "@react-pdf/renderer";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

type CertificateDataProps = {
  email: string;
  name: string;
  certId: string;
  certificateTemplate: string;
};

export const CertificateVerifier = ({
  id,
  certId,
}: {
  id: string;
  certId: string;
}) => {
  const [certificate, setCertificate] = useState<CertificateDataProps>({
    email: "",
    name: "",
    certId: "",
    certificateTemplate: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const eventName = useRef<string>("");
  const eventDate = useRef<string>("");
  useEffect(() => {
    const checkCertificate = async () => {
      setLoading(true);
      const docRef = doc(db, "events", id);
      const eventDoc = await getDoc(docRef);
      if (eventDoc.exists()) {
        eventName.current = eventDoc.data().eventName || "";
        eventDate.current =
          eventDoc.data().eventDate.toDate().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }) || "";
        const certificateTemplate = eventDoc.data().certificateTemplate || "";
        const guestList = eventDoc.data().guestList || [];
        // Check if certId exists in guestList
        const matchingCert = guestList.find(
          (guest: CertificateDataProps) => guest.certId === certId
        );
        if (matchingCert) {
          const { email, name, certId } = matchingCert;
          setCertificate({
            email,
            name,
            certId,
            certificateTemplate,
          });
        }
      }
      setLoading(false);
    };
    checkCertificate();
  }, []);
  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <RingLoader />
      </div>
    );
  } else if (!loading && certificate?.certId === "") {
    return (
      <>
        <div className="h-screen px-28">
          <div className="h-full w-full flex items-center justify-center">
            <Card className="w-96">
              <CardHeader>
                <CardTitle className="text-center">
                  Are you lost buddy?
                </CardTitle>
                <CardDescription className="text-center">
                  Seems like you entered the wrong URL.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center">Certificate does not exist.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-screen px-28">
          <div className="h-full w-full flex flex-col items-center justify-center gap-3">
            <span className="font-semibold text-xl">
              ✨ Congratulations, {certificate.name} for participating in{" "}
              {eventName.current} last {eventDate.current}! ✨
            </span>
            <PDFViewer width={"80%"} height={"90%"}>
              <Certificate
                certificateTemplate={certificate.certificateTemplate}
                guestName={certificate.name}
              />
            </PDFViewer>
          </div>
        </div>
      </>
    );
  }
};
