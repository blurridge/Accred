"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GoogleButton from "react-google-button";

export const AdminLoginButton = () => {
  const { googleLogin, user, logOut, checkIfUserIsAdmin } = useAuth();
  const [validUser, setValidUser] = useState<boolean>(true);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      googleLogin();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      if (checkIfUserIsAdmin(user)) {
        setValidUser(true);
        router.push("/admin/home");
      } else {
        setValidUser(false);
        logOut();
      }
    }
  }, [user]);

  if (validUser) {
    return (
      <>
        <GoogleButton
          data-te-ripple-init
          type="light"
          onClick={() => {
            handleGoogleLogin();
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <GoogleButton
          data-te-ripple-init
          type="light"
          onClick={() => {
            handleGoogleLogin();
          }}
        />
        <span className="font-title text-red-600">
          Invalid user. Please try again.
        </span>
      </>
    );
  }
};
