import { PropsWithChildren } from "react";

export default async function UnauthenticatedLayout(props: PropsWithChildren) {
  return (
    <div className="h-full flex items-center justify-center">
      {props.children}
    </div>
  );
}
