"use client";

import { Fragment, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { SidebarComponent } from "./private/sidebar-component";
import { Footer } from "./Footer";
import { Header } from "./Header";

type props = { children: React.ReactNode };

export const Container = ({ children }: props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/in/dashboard");
    } else {
      router.push("/");
    }
  }, [session, router]);

  const isInvalidPathname = /\/(in|auth)\b/i.test(pathname);

  return (
    <Fragment>
      <main className="flex w-full relative min-h-screen bg-custom-primary">
        {session && <SidebarComponent />}
        <div className="w-full">
          <Header />
          <div
            className={`w-full ${
              !session ? "min-h-screen" : "min-h-[calc(100vh-8rem)]"
            }`}
          >
            {children}
          </div>
        </div>
      </main>
      {!isInvalidPathname && <Footer />}
    </Fragment>
  );
};
