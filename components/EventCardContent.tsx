"use client";

import { GuestLoginButton } from "@/components/GuestLoginButton";
import { useAuth } from "@/context/AuthContext";
import { Guest } from "@/utils/uploadToFirestore";
import { Button } from "@/components/ui/button";
import { User } from "firebase/auth";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Certificate from "./Certificate";

export const EventCardContent = ({
  guestList,
  certificateTemplate,
}: {
  guestList: Guest[];
  certificateTemplate: string;
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
                  <Button className="w-full" disabled>Loading PDF...</Button>
                </div>
              ) : (
                <div>
                  <Button className="w-full">Download PDF</Button>
                </div>
              )
            }
          </PDFDownloadLink>
          <Button>Send to Email</Button>
          <Button>Add to LinkedIn</Button>
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
