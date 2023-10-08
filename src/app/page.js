"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import logo from "../../public/loginScreen.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { toast } from "react-toastify";

const loginSchema = z
  .object({
    secret: z.string({
      required_error: "É obrigatório informar a palavra magica!",
    }),
  })
  .required();

export default function Home() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  function onSubmit(data) {
    if (data.secret === "nasa" || "NASA") {
      Cookies.set("key", data.secret);
      router.push("/dashboard/projetos");
    } else {
      toast.error(
        <div className="flex flex-col">
          <span>Ta errando a palavra magica!</span>
        </div>
      );
    }
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="absolute top-5 right-10">
        <ModeToggle />
      </div>
      <Card className="w-[350px] md:w-[500px]">
        <div className="flex flex-row justify-center items-center mt-10 w-full">
          <Image
            className=" rounded-lg w-[300px] md:w-[350px] dark:bg-white"
            src={logo}
            alt="logo Inquisitor"
            height={128}
            priority
            placeholder="blur"
          />
        </div>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Insira a palavra magica para acessar a plataforma!
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="secret"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Palavra Magica</FormLabel>
                    <FormControl>
                      <Input placeholder="Insira a palavra" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-row justify-center">
                <Button type="submit" className="w-full uppercase">
                  Entrar
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter />
      </Card>
    </main>
  );
}
