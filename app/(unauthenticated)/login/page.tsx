"use client";

import LoginView, { loginViewFormSchema } from "@/views/login-view";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const { toast } = useToast();

  const loginForm = useForm<z.infer<typeof loginViewFormSchema>>({
    resolver: zodResolver(loginViewFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(loginForm.formState.errors);

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
        }
      })
      .finally(() => loginForm.reset());
  };

  return (
    <LoginView
      onClickForgotPassword={() => {
        console.log("forgpas");
      }}
      form={{
        ...loginForm,
        formState: {
          ...loginForm.formState,
          isSubmitting: loginForm.formState.isSubmitting,
        },
      }}
      formSubmitHandler={submitHandler}
    />
  );
};

export default LoginPage;
