"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import accredLogo from "@/assets/accred_logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Moon, ChevronDown, Sun } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "next-themes";

export const AdminNavbar = () => {
  const { user, logOut } = useAuth();
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex bg-white drop-shadow-xl p-5 justify-between dark:bg-[#080E1D]">
      <div className="flex gap-5">
        <Image
          src={accredLogo}
          width={70}
          alt="Accred Logo"
          className={theme === "light" ? "" : "invert"}
          priority
        />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/admin/home" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/admin/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Help
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() =>
                  theme === "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {theme === "dark" ? <Sun /> : <Moon />}
                </NavigationMenuLink>
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-1">
        <Avatar>
          {user ? (
            <AvatarImage src={user.photoURL || undefined} alt="@blurridge" />
          ) : (
            <AvatarFallback>ZM</AvatarFallback>
          )}
        </Avatar>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <ChevronDown />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export const GuestNavbar = () => {
  const { user, logOut } = useAuth();
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex bg-white drop-shadow-xl p-5 justify-between dark:bg-[#080E1D]">
      <div className="flex gap-5">
        <Image
          src={accredLogo}
          width={70}
          alt="Accred Logo"
          className={theme === "light" ? "" : "invert"}
          priority
        />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() =>
                  theme === "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {theme === "dark" ? <Sun /> : <Moon />}
                </NavigationMenuLink>
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-1">
        {user ? (
          <>
            <Avatar>
              <AvatarImage src={user.photoURL || undefined} alt="@blurridge" />
              <AvatarFallback>ZM</AvatarFallback>
            </Avatar>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <ChevronDown />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : null}
      </div>
    </nav>
  );
};
