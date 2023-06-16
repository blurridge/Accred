"use client";

import { GuestLoginButton } from "@/components/GuestLoginButton";
import { useAuth } from "@/context/AuthContext";
import { Guest } from "@/utils/uploadToFirestore";
import { Button } from "@/components/ui/button";
import { User } from "firebase/auth";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Certificate from "@/components/Certificate";
import { generateLinkedInShareURL } from "@/utils/generateLinkedInShareURL";
import { Timestamp } from "firebase/firestore";

export const EventCardContent = ({
  guestList,
  certificateTemplate,
  eventName,
  eventDate,
}: {
  guestList: Guest[];
  certificateTemplate: string;
  eventName: string;
  eventDate: Timestamp;
}) => {
  const { logOut, user } = useAuth();

  const checkIfUserInGuestList = (user: User) => {
    return guestList.some((person) => person.email === user.email);
  };

  const handleLogOut = () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToLinkedIn = () => {
    const timestampMillis = eventDate.toMillis();
    const date = new Date(timestampMillis);
    const eventYear = date.getFullYear();
    const eventMonth = date.getMonth() + 1;
    const shareURL = generateLinkedInShareURL({
      orgName: "Google Developer Student Clubs San Carlos",
      certTitle: eventName,
      certYear: eventYear,
      certMonth: eventMonth,
    });
    window.open(shareURL, "_blank");
  };

  if (user === null) {
    return <GuestLoginButton />;
  } else if (checkIfUserInGuestList(user)) {
    return (
      <>
        <div className="flex flex-col gap-2 w-5/12">
          <PDFDownloadLink
            document={
              <Certificate
                certificateTemplate={certificateTemplate}
                guestName={user?.displayName || ""}
              />
            }
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
