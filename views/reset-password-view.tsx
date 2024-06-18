import { CardWrapper } from "@/components/card-wrapper";
import { FormInput } from "@/components/form-components/form-input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { NextChatAppForm } from "@/types/form-interface";
import { z } from "zod";

export const resetPasswordViewFormSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, {
        message: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.confirmPassword === data.newPassword, {
    message: "The passwords do not match.",
    path: ["confirmPassword"],
  });

export interface ResetPasswordViewProps
  extends NextChatAppForm<z.infer<typeof resetPasswordViewFormSchema>> {}

const ResetPasswordView = (props: ResetPasswordViewProps) => {
  return (
    <CardWrapper backButtonLabel="Back to login" backButtonHref="/login">
      <div className="grid gap-5">
        <div className="flex flex-col space-y-2 text-center">
          <p className="text-sm text-muted-foreground">
            Please enter a new password
          </p>

          <Form {...props.form}>
            <form onSubmit={props.form.handleSubmit(props.formSubmitHandler)}>
              <div className="grid gap-2">
                <FormInput
                  form={props.form}
                  label="New Password"
                  name="newPassword"
                  disabled={props.form.formState.isSubmitting}
                  type="password"
                  tooltip
                />

                <FormInput
                  form={props.form}
                  label="Confirm Password"
                  name="confirmPassword"
                  disabled={props.form.formState.isSubmitting}
                  type="password"
                />

                <Button disabled={props.form.formState.isSubmitting}>
                  {props.form.formState.isSubmitting && (
                    <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
                  )}
                  Reset password
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ResetPasswordView;
