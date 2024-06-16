import { CardWrapper } from "@/components/card-wrapper";
import { FormInput } from "@/components/form-components/form-input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { NextChatAppForm } from "@/types/form-interface";
import { z } from "zod";

export const forgotPasswordViewFormSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }),
});
export interface ForgotPasswordViewProps
  extends NextChatAppForm<z.infer<typeof forgotPasswordViewFormSchema>> {}

const GigyaForgotPasswordView = (props: ForgotPasswordViewProps) => {
  const {
    formSubmitHandler,
    form: { formState, handleSubmit },
  } = props;

  return (
    <CardWrapper backButtonLabel="Back to login" backButtonHref="/login">
      <div className="grid gap-5">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Reset your password
          </h1>

          <p className="text-sm text-muted-foreground">
            Enter your login id below to reset your password
          </p>
        </div>

        <Form {...props.form}>
          <form onSubmit={handleSubmit(formSubmitHandler)}>
            <div className="grid gap-2">
              <FormInput
                form={props.form}
                label="Login Id"
                name="email"
                disabled={formState.isSubmitting}
              />

              <Button disabled={formState.isSubmitting}>
                {formState.isSubmitting && (
                  <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
                )}
                Reset password
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </CardWrapper>
  );
};

export default GigyaForgotPasswordView;
