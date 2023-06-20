import accredLogo from "@/assets/accred_logo.svg";
import { FeatureCards } from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { GuestNavbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <GuestNavbar />
        <section className="py-16 px-10 flex flex-col items-center h-full gap-2">
          <Image
            src={accredLogo}
            width={400}
            alt="Accred Logo"
            className="dark:invert"
            priority
          />
          <span className="font-bold text-5xl text-center w-4/6 leading-snug">
            Empower your career with instant certificates, Seamlessly.
          </span>
          <span className="font-medium text-2xl text-center w-3/6 leading-snug">
            A web application designed to simplify the process of generating
            e-certificates on demand.
          </span>
          <div className="mt-4 flex gap-5">
            <Link href="/docs" legacyBehavior passHref>
              <Button>Get Started</Button>
            </Link>
            <Link href="/contact" legacyBehavior passHref>
              <Button>Subscribe</Button>
            </Link>
          </div>
        </section>
        <section className="pb-16 px-10 flex flex-col items-center h-full gap-2">
          <FeatureCards />
        </section>
        <Footer />
      </div>
    </>
  );
}
