"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { RingLoader } from "@/components/RingLoader";
import { AdminLoginButton } from "@/components/AdminLoginButton";
import gdscLogo from "@/assets/gdsc_logo.png";
import Image from "next/image";

export type Admin = {
  email: string;
};

export const LoginCard = () => {
  const [adminList, setAdminList] = useState<Admin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const q = query(collection(db, "admins"));
    const unsubscribe = onSnapshot(q, (snap) => {
      setLoading(true);
      const data: Admin[] = snap.docs.map((doc) => ({
        email: doc.data().email,
      }));
      setAdminList(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
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
              src={gdscLogo}
              width={82}
              height={40}
              alt="GDSC Logo"
              priority
            />
            <CardTitle className="text-center">
              Google Developer Student Clubs - University of San Carlos
              Certificate Generator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AdminLoginButton adminList={adminList} />
          </CardContent>
          <CardFooter>by @blurridge | Zach Riane Machacon</CardFooter>
        </Card>
      </>
    );
  }
};
