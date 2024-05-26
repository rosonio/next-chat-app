import { ReactNode, HTMLInputTypeAttribute } from "react";
import {
  Path,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";

export interface NextChatAppForm<T extends FieldValues> {
  /**
   * The handler for the form submit event.
   *
   * @see https://react-hook-form.com/docs/useform/handlesubmit
   */
  formSubmitHandler: SubmitHandler<T>;
  /**
   * The return of the useForm hook from react-hook-form.
   *
   * @see https://react-hook-form.com/docs/useform
   */
  form: UseFormReturn<T>;
}

export interface FormElementProps<FormFieldValues extends FieldValues> {
  description?: ReactNode;
  disabled?: boolean;
  form: UseFormReturn<FormFieldValues>;
  label?: string;
  name: Path<FormFieldValues>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}
