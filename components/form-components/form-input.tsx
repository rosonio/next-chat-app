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

export const FormInput = <T extends FieldValues>(
  props: FormElementProps<T>
) => {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          {props.label && <FormLabel>{props.label}</FormLabel>}

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
