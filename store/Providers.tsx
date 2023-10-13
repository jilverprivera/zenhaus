"use client";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import { store } from "@/store/store";
import { Container } from "@/components/layout/Container";

type props = {
  children: React.ReactNode;
};

export function Providers({ children }: props) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Container>{children}</Container>
      </Provider>
    </SessionProvider>
  );
}
