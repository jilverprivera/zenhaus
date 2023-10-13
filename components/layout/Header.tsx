"use client";

import { Logo } from "./Logo";
import { LoginButton } from "../auth";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

export const Header = () => {
  const { data: session } = useSession();
  return (
    <header
      className={`${
        session
          ? "bg-custom-primary border-b border-b-neutral-900"
          : "bg-custom-primary/20 backdrop-blur-sm   border-b border-b-custom-primary"
      } sticky top-0 left-0 z-50 w-full `}
    >
      <div
        className={` ${
          session ? "px-4" : "max-w-screen-xl w-11/12"
        } relative mx-auto h-20 flex items-center justify-between`}
      >
        <Logo />
        {session ? (
          <Button variant="secondary" onClick={() => signOut()}>
            Sign out
          </Button>
        ) : (
          <div className="flex items-center justify-center space-x-4">
            <Button className="bg-transparent">How it works</Button>
            <Button className="bg-transparent">Changelog</Button>
            <LoginButton />
          </div>
        )}
      </div>
    </header>
  );
};
