import { FormInput } from "@/components/form-components/form-input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { NextChatAppForm } from "@/types/form-interface";
import { z } from "zod";

export const loginViewFormSchema = z.object({
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string().min(1, {
    message: "Please specify the password",
  }),
});

export interface LoginViewProps
  extends NextChatAppForm<z.infer<typeof loginViewFormSchema>> {
  /**
   * Callback for when the user clicks the "Forgot Password" button.
   * Use this to redirect the user to the forgot password screen.
   */
  onClickForgotPassword: () => void;
  /**
   * Callback for when the user clicks the "Register" button.
   * Use this to redirect the user to the registration screen.
   */
  onClickRegister: () => void;
}

const LoginView = (props: LoginViewProps) => {
  const {
    onClickForgotPassword,
    onClickRegister,
    formSubmitHandler,
    form: { formState, handleSubmit },
  } = props;

  return (
    <div className="grid gap-5">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials below
        </p>
      </div>

      <Form {...props.form}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <div className="grid gap-2">
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

            <Button disabled={formState.isSubmitting}>
              {formState.isSubmitting && (
                <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
              )}
              Sign In
            </Button>

            <Button
              type="button"
              variant="link"
              className="justify-start p-0"
              onClick={onClickForgotPassword}
            >
              Having trouble signing in?
            </Button>
          </div>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button variant="outline" type="button" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? (
          <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Icons.gitHub className="w-4 h-4 mr-2" />
        )}{" "}
        Github
      </Button>

      <div className="flex flex-row flex-wrap justify-center gap-1">
        <span className="inline-flex items-center justify-center h-10 text-sm font-medium text-center text-primary">
          Don&apos;t have an account?
        </span>

        <Button
          disabled={formState.isSubmitting}
          variant="link"
          className="p-0"
          onClick={onClickRegister}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};
