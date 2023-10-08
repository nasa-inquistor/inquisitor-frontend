"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function Logout() {
  const router = useRouter();

  function disconnectUser() {
    Cookies.remove("key");
    router.push("/");
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        disconnectUser();
      }}
    >
      <ExitIcon className="text-black dark:text-white " />
    </Button>
  );
}
