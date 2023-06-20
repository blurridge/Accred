"use client";

import { useAuth } from "@/context/AuthContext";
import GoogleButton from "react-google-button";

export const GuestLoginButton = () => {
  const { googleLogin } = useAuth();

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
