import { CardWrapper } from "@/components/card-wrapper";
import { FormInput } from "@/components/form-components/form-input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import type { NextChatAppForm } from "@/types/form-interface";
import { z } from "zod";

export const loginViewFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export interface LoginViewProps
  extends NextChatAppForm<z.infer<typeof loginViewFormSchema>> {
  /**
   * Callback for when the user clicks the "Forgot Password" button.
   * Use this to redirect the user to the forgot password screen.
   */
  onClickForgotPassword: () => void;
}

const LoginView = (props: LoginViewProps) => {
  const {
    onClickForgotPassword,
    formSubmitHandler,
    form: { formState, handleSubmit },
  } = props;

  return (
    <CardWrapper
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      <div className="flex flex-col space-y-2 items-center ">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials below
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

          <Button type="submit" disabled={formState.isSubmitting}>
            {formState.isSubmitting && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            Sign In
          </Button>

          <Button type="button" variant="link" onClick={onClickForgotPassword}>
            Having trouble signing in?
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginView;
