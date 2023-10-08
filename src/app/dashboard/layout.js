"use client";

import { SidebarNav } from "@/components/sidebar-nav";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import inquisitorLogo from "../../../public/logo.png";
import { Logout } from "@/components/logout-button";

const sidebarNavItems = [
  {
    title: "Projetos",
    href: "/dashboard/projetos",
  },
  {
    title: "Pesquisadores",
    href: "/dashboard/pesquisadores",
  },
  {
    title: "Debates",
    href: "/dashboard/debates",
  },
];

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="space-y-6 p-10 block">
        <div className="flex space-y-0.5 justify-between items-center">
          <div className="flex flex-row items-center">
            <Image
              src={inquisitorLogo}
              alt="logo"
              width={256}
              height={96}
              className="mr-3 rounded-md"
            />
            {/* <div>
              <h2 className="text-2xl font-bold tracking-tight">Inquisitor</h2>
              <p className="text-muted-foreground">
                Realize o envio e consulta dos Scripts.
              </p>
            </div> */}
          </div>
          <div className="flex flex-row justify-between w-[96px]">
            <ModeToggle />
            <Logout />
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 xl:flex-row xl:space-x-12 xl:space-y-0">
          <aside className="-mx-4 xl:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
}
