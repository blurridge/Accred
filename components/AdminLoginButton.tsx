"use client";

import GoogleButton from "react-google-button";
import { useAuth } from "@/context/AuthContext";
import { Admin } from "@/context/AdminContext";
import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const AdminLoginButton = ({ adminList }: { adminList: Admin[] }) => {
  const { googleLogin, user, logOut } = useAuth();
  const [validUser, setValidUser] = useState<boolean>(true);
  const router = useRouter();

  const checkIfUserIsAdmin = (user: User) => {
    return (
      adminList.length !== 0 &&
      adminList.some((person) => person.email === user.email)
    );
  };

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
    } else {
      logOut();
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
