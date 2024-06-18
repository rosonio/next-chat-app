"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import RegistrationView, {
  registrationViewFormSchema,
} from "@/views/registration-view";
import { register } from "./actions";
import { useState } from "react";
import RegistrationSuccessfullView from "@/views/registration-successfull-view";

const RegistrationPage = () => {
  const { toast } = useToast();
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] =
    useState(false);

  const registrationForm = useForm<z.infer<typeof registrationViewFormSchema>>({
    resolver: zodResolver(registrationViewFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const submitHandler = async (
    data: z.infer<typeof registrationViewFormSchema>
  ) => {
    try {
      const registerResponse = await register(data);

      if (registerResponse.success) {
        setFormSubmittedSuccessfully(true);
      } else {
        throw new Error();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Something went wrong",
          description:
            "There was a problem while creating your account. Please try again",
          variant: "destructive",
        });
      }
    } finally {
      registrationForm.reset();
    }
  };

  if (formSubmittedSuccessfully) {
    return <RegistrationSuccessfullView />;
  }

  return (
    <RegistrationView
      form={registrationForm}
      formSubmitHandler={submitHandler}
    />
  );
};

export default RegistrationPage;
