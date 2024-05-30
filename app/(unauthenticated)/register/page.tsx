"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import RegistrationView, {
  registrationViewFormSchema,
} from "@/views/registration-view";
import { register } from "./actions";

const RegistrationPage = () => {
  const { toast } = useToast();

  const registrationForm = useForm<z.infer<typeof registrationViewFormSchema>>({
    resolver: zodResolver(registrationViewFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const submitHandler = (data: z.infer<typeof registrationViewFormSchema>) => {
    register(data).then((data) => {
      console.log(data);
    });
    // toast({
    //   title: "Account created",
    //   description: "Account created successfully",
    //   variant: "success",
    // });
  };

  return (
    <RegistrationView
      form={{
        ...registrationForm,
        formState: {
          ...registrationForm.formState,
          isSubmitting: registrationForm.formState.isSubmitting,
        },
      }}
      formSubmitHandler={submitHandler}
    />
  );
};

export default RegistrationPage;
