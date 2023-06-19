"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RingLoader } from "@/components/RingLoader";
import { useAuth } from "@/context/AuthContext";
import { AdminLoginButton } from "@/components/AdminLoginButton";
import accredSq from "@/assets/accred_sq.svg";
import Image from "next/image";

export const LoginCard = () => {
  const { loading } = useAuth();
  const currentYear = new Date().getFullYear();
  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <RingLoader />
      </div>
    );
  } else {
    return (
      <>
        <Card className="w-96 flex flex-col items-center justify-center ">
          <CardHeader className="flex flex-col items-center justify-center gap-3">
            <Image
              src={accredSq}
              width={200}
              alt="Accred Dark Logo"
              className="dark:invert"
              priority
            />
            <CardTitle className="text-center">
              Event E-Certificate Generator Admin Page
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <AdminLoginButton />
          </CardContent>
          <CardFooter>
            <p className="m-auto text-center text-gray-500">
              © {currentYear} Made with 🖤 by{" "}
              <a
                href="https://github.com/blurridge"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @blurridge
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/zachriane/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Zach Riane Machacon
              </a>
            </p>
          </CardFooter>
        </Card>
      </>
    );
  }
};
