"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "../ui/Head";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReactNode } from "react";
import { socialLinks } from "@/constant";
import Button from "../ui/Button";
import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required." }).max(50),
  lastName: z.string().min(2, { message: "Last Name is required." }).max(50),
  email: z.string().email({ message: "Please provide a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message should be at least 10 characters." })
    .max(500),
});

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div
      className="max-w-7xl relative mx-auto py-20 h-full px-4 xl:px-0 w-full space-y-6"
      id="contact"
    >
      <Head>Contact</Head>
      <div
        className={cn(
          "w-full h-full gap-4 flex flex-col lg:flex-row items-center justify-center",
          inter.className
        )}
      >
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
          <div className="flex items-center w-full gap-4 justify-between">
            <div className="space-y-2 w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName")}
                type="text"
                placeholder="Ex: Sweet"
                className="w-full px-4 py-2 border-[.5px] text-foreground bg-zinc-800 border-neutral-700 rounded-sm focus:outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2 w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName")}
                type="text"
                placeholder="Ex: Heart"
                className="w-full px-4 py-2 border-[.5px] text-foreground bg-zinc-800 border-neutral-700 rounded-sm focus:outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Ex: SweetHeart@mail.com"
              className="w-full px-4 py-2 border-[.5px] text-foreground bg-zinc-800 border-neutral-700 rounded-sm focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <textarea
              {...register("message")}
              placeholder="Ex: Hello Moncef! I want to discuss a project..."
              className="w-full px-4 py-2 border-[.5px] text-foreground bg-zinc-800 min-h-[100px] border-neutral-700 rounded-sm focus:outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <div className="w-full h-full flex items-end justify-end">
            <Button className="md:w-fit w-full">Send Message</Button>
          </div>
        </form>

        {/* Separator */}
        <div
          className={cn(
            "relative hidden lg:flex flex-col items-center",
            inter.className
          )}
        >
          <div className="h-40 w-[1px] bg-gradient-to-b from-white to-background" />
          <h1 className="rotate-90 origin-center text-white text-center my-4">
            OR
          </h1>
          <div className="h-40 w-[1px] bg-gradient-to-t from-white to-background" />
        </div>

        <div
          className={cn(
            "relative lg:hidden flex items-center gap-4 justify-center w-full",
            inter.className
          )}
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-white to-background" />
          <h1 className="text-white">OR</h1>
          <div className="w-full h-[1px] bg-gradient-to-l from-white to-background" />
        </div>

        {/* Social Media */}
        <div className="w-full flex flex-col gap-4 h-full">
          {socialLinks.map((item) => (
            <Socialcomp key={item.name} link={item.href}>
              {item.icon}
            </Socialcomp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

const Socialcomp = ({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-full overflow-hidden rounded-sm cursor-pointer group h-full relative border items-center py-6 justify-center group-hover:text-foreground flex"
    >
      <div className="group-hover:text-background z-[1] duration-150 delay-200">
        {children}
      </div>
      <span className="-translate-x-full group-hover:translate-x-0 rotate-45 bg-gradient-to-t from-white/90 via-foreground to-white/90 inset-0 w-full h-full absolute duration-500" />
    </Link>
  );
};
