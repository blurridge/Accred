"use client";

import { GuestLoginButton } from "@/components/GuestLoginButton";
import { GuestAuth } from "@/context/GuestAuthContext";
import { Guest } from "@/utils/uploadToFirestore";
import { Button } from "@/components/ui/button";
import { User } from "firebase/auth";

export const EventCardContent = ({ guestList }: { guestList: Guest[] }) => {
  const { logOut, user } = GuestAuth();

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
        <Button>Download PDF</Button>
        <Button>Send to Email</Button>
        <Button>Add to LinkedIn</Button>
        <Button variant="destructive" onClick={handleLogOut}>
          Logout
        </Button>
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
