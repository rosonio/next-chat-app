"use client";

import { signIn } from "next-auth/react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export const Social = () => {
  const { toast } = useToast();

  const googleSubmitHandler = () => {
    signIn("google", {
      redirect: false,
    }).then((response) => {
      if (response?.error) {
        toast({
          title: "Invalid credentials",
          description: "Provided credentials are invalid. Please try again",
          variant: "destructive",
        });
      }

      if (response?.ok && !response.error) {
        toast({
          title: "Successfull login",
          description: "You logged in successfully",
          variant: "success",
        });
      }
    });
  };

  const githubSubmitHandler = () => {
    signIn("github", {
      redirect: false,
    }).then((response) => {
      if (response?.error) {
        toast({
          title: "Invalid credentials",
          description: "Provided credentials are invalid. Please try again",
          variant: "destructive",
        });
      }

      if (response?.ok && !response.error) {
        toast({
          title: "Successfull login",
          description: "You logged in successfully",
          variant: "success",
        });
      }
    });
  };

  return (
    <div className="flex flex-col w-full space-y-2">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={googleSubmitHandler}
        >
          <Icons.google className="w-4 h-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={githubSubmitHandler}
        >
          <Icons.gitHub className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
