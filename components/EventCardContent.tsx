"use client";

import Certificate from "@/components/Certificate";
import { GuestLoginButton } from "@/components/GuestLoginButton";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { generateLinkedInShareURL } from "@/utils/generateLinkedInShareURL";
import { Guest } from "@/utils/uploadToFirestore";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { useRef } from "react";

export const EventCardContent = ({
  guestList,
  certificateTemplate,
  eventName,
  eventDate,
  certificateTextColor,
}: {
  guestList: Guest[];
  certificateTemplate: string;
  eventName: string;
  eventDate: Timestamp;
  certificateTextColor: string;
}) => {
  const { logOut, user } = useAuth();
  const certId = useRef<string>("");
  const guestName = useRef<string>("");

  const checkIfUserInGuestList = (user: User) => {
    const foundGuest = guestList.find((person) => person.email === user.email);
    if (foundGuest) {
      certId.current = foundGuest.certId;
      guestName.current = foundGuest.name;
      return true;
    }
    return false;
  };

  const handleLogOut = () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToLinkedIn = () => {
    if (typeof window !== "undefined") {
      const timestampMillis = eventDate.toMillis();
      const date = new Date(timestampMillis);
      const eventYear = date.getFullYear();
      const eventMonth = date.getMonth() + 1;
      const shareURL = generateLinkedInShareURL({
        orgName: "Google Developer Student Clubs San Carlos",
        certTitle: eventName,
        certYear: eventYear,
        certMonth: eventMonth,
        certId: certId.current,
        certURL: `${window.location.href}/certificate/${certId.current}`,
      });
      window.open(shareURL, "_blank");
    }
  };

  const userInGuestList = user !== null && checkIfUserInGuestList(user);

  if (user === null) {
    return <GuestLoginButton />;
  } else if (userInGuestList) {
    return (
      <>
        <div className="flex flex-col gap-2 w-5/12">
          <PDFDownloadLink
            document={
              <Certificate
                certificateTemplate={certificateTemplate}
                guestName={guestName.current || ""}
                certificateTextColor={certificateTextColor}
              />
            }
            fileName={`${user?.displayName}_certificate` || "certficate"}
          >
            {({ loading }) =>
              loading ? (
                <div>
                  <Button className="w-full" disabled>
                    Loading PDF...
                  </Button>
                </div>
              ) : (
                <div>
                  <Button className="w-full">Download PDF</Button>
                </div>
              )
            }
          </PDFDownloadLink>
          <Button onClick={handleAddToLinkedIn}>Add to LinkedIn</Button>
          <Button variant="destructive" onClick={handleLogOut}>
            Logout
          </Button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <span className="font-bold text-center">
          You have not been found as a guest for this event. Please contact the
          event administrators if this is a mistake.
        </span>
        <Button variant="destructive" onClick={handleLogOut}>
          Logout
        </Button>
      </>
    );
  }
};
