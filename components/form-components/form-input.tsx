"use client";

import { FormElementProps } from "@/types/form-interface";
import { FieldValues } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Info } from "lucide-react";

export const FormInput = <T extends FieldValues>(
  props: FormElementProps<T>
) => {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row space-x-1">
            {props.label && <FormLabel>{props.label}</FormLabel>}

            {props.tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={14} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The password must meet the complexity requirements:</p>
                    <ul>
                      <li>- Minimum 6 characters long</li>
                      <li>- At least one uppercase letter</li>
                      <li>- At least one lowercase letter</li>
                      <li>- At least one number</li>
                      <li>- At least one special symbol</li>
                    </ul>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <FormControl>
            <Input
              {...field}
              type={props.type}
              disabled={props.disabled}
              placeholder={props.placeholder}
            />
          </FormControl>

          {props.description && (
            <FormDescription>{props.description}</FormDescription>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormInput.displayName = "FormInput";
