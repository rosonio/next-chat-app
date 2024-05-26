"use server";

import { registrationViewFormSchema } from "@/views/registration-view";
import { z } from "zod";

export async function register(
  data: z.infer<typeof registrationViewFormSchema>
) {
  const validateFields = registrationViewFormSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Logged in!" };
}
