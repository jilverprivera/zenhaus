import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

type props = {
  label: string;
  icon: JSX.Element;
  provider: string;
};
export const AuthButton = ({ icon, label, provider }: props) => {
  return (
    <Button
      variant="outline"
      className="space-x-2"
      onClick={() => signIn(provider)}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Button>
  );
};
