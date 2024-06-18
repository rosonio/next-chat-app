import { CardWrapper } from "@/components/card-wrapper";

const RegistrationSuccessfullView = () => {
  return (
    <CardWrapper backButtonLabel="Return to login" backButtonHref="/login">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Registration Successfull!
        </h1>
        <p className="text-sm text-muted-foreground">
          You registration is now complete and you can login into your account.
        </p>
      </div>
    </CardWrapper>
  );
};

export default RegistrationSuccessfullView;
