import { CardWrapper } from "@/components/card-wrapper";
import { FormInput } from "@/components/form-components/form-input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { NextChatAppForm } from "@/types/form-interface";
import { z } from "zod";

export const registrationViewFormSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
});

export interface RegistrationViewProps
  extends NextChatAppForm<z.infer<typeof registrationViewFormSchema>> {}

const RegistrationView = (props: RegistrationViewProps) => {
  const {
    formSubmitHandler,
    form: { formState, handleSubmit },
  } = props;

  return (
    <CardWrapper
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      showSocial
    >
      <div className="flex flex-col space-y-2 items-center ">
        <h1 className="text-2xl font-semibold tracking-tight">
          Register a new account
        </h1>
        <p className="text-sm text-muted-foreground">
          Create your new account to get started.
        </p>
      </div>

      <Form {...props.form}>
        <form
          onSubmit={handleSubmit(formSubmitHandler)}
          className="flex flex-col space-y-2"
        >
          <FormInput
            form={props.form}
            label="Email"
            name="email"
            disabled={formState.isSubmitting}
          />

          <FormInput
            form={props.form}
            label="Password"
            name="password"
            type="password"
            disabled={formState.isSubmitting}
          />

          <FormInput
            form={props.form}
            label="First Name"
            name="firstName"
            disabled={formState.isSubmitting}
          />

          <FormInput
            form={props.form}
            label="Last Name"
            name="lastName"
            disabled={formState.isSubmitting}
          />

          <Button type="submit" disabled={formState.isSubmitting}>
            {formState.isSubmitting && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegistrationView;
