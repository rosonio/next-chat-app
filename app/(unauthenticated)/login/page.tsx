"use client";

import LoginView, { loginViewFormSchema } from "@/views/login-view";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/users");
    }
    router.prefetch("/forgot-password");
  }, [router, session?.status]);

  const loginForm = useForm<z.infer<typeof loginViewFormSchema>>({
    resolver: zodResolver(loginViewFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (data: z.infer<typeof loginViewFormSchema>) => {
    await signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((response) => {
        if (response?.error) {
          toast({
            title: "Invalid credentials",
            description: "Provided credentials are invalid. Please try again",
            variant: "destructive",
          });
        }

        if (response?.ok && !response.error) {
          toast({
            title: "Successfull login",
            description: "You logged in successfully",
            variant: "success",
          });
          router.push("/users");
        }
      })
      .finally(() => loginForm.reset());
  };

  return (
    <LoginView
      onClickForgotPassword={() => {
        router.push("/forgot-password");
      }}
      form={loginForm}
      formSubmitHandler={submitHandler}
    />
  );
};

export default LoginPage;
