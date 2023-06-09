"use client";

import GoogleButton from "react-google-button";
import { useAuth } from "@/context/AuthContext";

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
