import { CardWrapper } from "@/components/card-wrapper";

const ForgotPasswordSuccessView = () => {
  return (
    <CardWrapper backButtonLabel="Back to login" backButtonHref="/login">
      <div className="grid gap-5">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Password reset
          </h1>
          <p className="text-sm text-muted-foreground">
            An email regarding your password change has been sent to your email
            address.
          </p>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ForgotPasswordSuccessView;
