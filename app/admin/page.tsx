"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  router.push("/admin/login");
};

export default Page;
