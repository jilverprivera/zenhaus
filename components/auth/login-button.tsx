"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

export const LoginButton = () => {
  return (
    <Button
      variant="outline"
      className="space-x-2 bg-transparent text-neutral-300"
      onClick={() => signIn("google")}
    >
      <span className="text-lg">
        <FaGoogle />
      </span>
      <span>Sign In with Google</span>
    </Button>
  );
};
