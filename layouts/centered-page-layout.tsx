import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

export const CenteredPageLayout = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(({ children, ...props }, ref) => (
  <main
    ref={ref}
    className="flex flex-col items-center sm:justify-around"
    {...props}
  >
    {children}
  </main>
));
CenteredPageLayout.displayName = "CenteredPageLayout";
