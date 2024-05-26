"use client";

import LoginView, { loginViewFormSchema } from "@/views/login-view";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "./actions";
import { useToast } from "@/components/ui/use-toast";

const LoginPage = () => {
  const { toast } = useToast();

  const loginForm = useForm<z.infer<typeof loginViewFormSchema>>({
    resolver: zodResolver(loginViewFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (data: z.infer<typeof loginViewFormSchema>) => {
    login(data).then((data) => {
      console.log(data);
    });
    toast({
      title: "Logged in successful",
      description: "Logged in successful",
      variant: "destructive",
    });
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
