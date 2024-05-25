import { Card } from "@/components/ui/card";
import { PropsWithChildren } from "react";

const CenteredBox = (props: PropsWithChildren) => {
  return (
    <div className="mx-auto flex w-full flex-col space-y-6 justify-start sm:justify-center sm:w-[350px]">
      <Card className="p-6 border-0 shadow-none sm:shadow-sm sm:border sm:rounded-lg">
        {props.children}
      </Card>
    </div>
  );
};

const CenterBoxLayout = (props: PropsWithChildren) => {
  return (
    <div className="container flex min-h-screen px-0 lg:max-w-none sm:px-4">
      <CenteredBox>{props.children}</CenteredBox>
    </div>
  );
};

export default CenterBoxLayout;
