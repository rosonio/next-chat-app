"use client";

import ResetPasswordSuccessView from "@/views/reset-password-success-view";
import ResetPasswordView, {
  resetPasswordViewFormSchema,
} from "@/views/reset-password-view";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { changePassword } from "./actions";
import { useToast } from "@/components/ui/use-toast";

const ForgotPasswordPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] =
    useState(false);

  const token = searchParams?.get("token");

  useEffect(() => {
    router.prefetch("/login");
  }, [router]);

  const resetPasswordForm = useForm<
    z.infer<typeof resetPasswordViewFormSchema>
  >({
    resolver: zodResolver(resetPasswordViewFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const resetPasswordSubmitHandler = async (
    data: z.infer<typeof resetPasswordViewFormSchema>
  ) => {
    try {
      const resetPasswordResponse = await changePassword(data, token);

      if (resetPasswordResponse.success) {
        setFormSubmittedSuccessfully(true);
      } else {
        throw new Error(resetPasswordResponse.error);
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
      resetPasswordForm.reset();
    }
  };

  if (formSubmittedSuccessfully) {
    return <ResetPasswordSuccessView />;
  }

  return (
    <ResetPasswordView
      form={resetPasswordForm}
      formSubmitHandler={resetPasswordSubmitHandler}
    />
  );
};

export default ForgotPasswordPage;
