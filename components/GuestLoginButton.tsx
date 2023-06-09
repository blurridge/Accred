"use client";

import GoogleButton from "react-google-button";
import { GuestAuth } from "@/context/GuestAuthContext";

export const GuestLoginButton = () => {
  const { googleLogin } = GuestAuth();

  const handleGoogleLogin = async () => {
    try {
      googleLogin();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GoogleButton
        type="light"
        onClick={() => {
          handleGoogleLogin();
        }}
      />
    </>
  );
};
