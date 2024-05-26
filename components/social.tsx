"use client";

import { Icons } from "./icons";
import { Button } from "./ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" variant="outline" className="w-full" onClick={() => {}}>
        <Icons.google className="w-4 h-4" />
      </Button>
      <Button size="lg" variant="outline" className="w-full" onClick={() => {}}>
        <Icons.gitHub className="w-4 h-4" />
      </Button>
    </div>
  );
};
