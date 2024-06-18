import { PropsWithChildren, Suspense } from "react";

export default async function UnauthenticatedLayout(props: PropsWithChildren) {
  return (
    <Suspense>
      <div className="h-full flex items-center justify-center">
        {props.children}
      </div>
    </Suspense>
  );
}
