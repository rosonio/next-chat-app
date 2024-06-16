"use client";

import ForgotPasswordSuccessView from "@/views/forgot-password-success-view";
import ForgotPasswordView, {
  forgotPasswordViewFormSchema,
} from "@/views/forgot-password-view";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { forgotPassword } from "./actions";
import { useToast } from "@/components/ui/use-toast";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] =
    useState(false);

  useEffect(() => {
    router.prefetch("/login");
  }, [router]);

  const forgotPasswordForm = useForm<
    z.infer<typeof forgotPasswordViewFormSchema>
  >({
    resolver: zodResolver(forgotPasswordViewFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const forgotPasswordSubmitHandler = async (
    data: z.infer<typeof forgotPasswordViewFormSchema>
  ) => {
    try {
      const forgotPasswordResponse = await forgotPassword(data);
      if (forgotPasswordResponse.success) {
        setFormSubmittedSuccessfully(true);
      } else {
        throw new Error(forgotPasswordResponse.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Something went wrong",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      forgotPasswordForm.reset();
    }
  };

  if (formSubmittedSuccessfully) {
    return <ForgotPasswordSuccessView />;
  }

  return (
    <ForgotPasswordView
      form={forgotPasswordForm}
      formSubmitHandler={forgotPasswordSubmitHandler}
    />
  );
};

export default ForgotPasswordPage;
