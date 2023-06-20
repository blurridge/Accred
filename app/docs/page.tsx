"use client";

import accredLs from "@/assets/accred_ls.svg";
import AdminGuide from "@/components/AdminGuide.mdx";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <article className="prose dark:prose-invert py-10 m-auto">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={accredLs}
            width={500}
            alt="Accred Dark Logo"
            className="mx-auto dark:invert"
            priority
          />
        </div>
        <AdminGuide />
      </article>
    </>
  );
};

export default Page;
