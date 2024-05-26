"use server";

import { loginViewFormSchema } from "@/views/login-view";
import { z } from "zod";

export async function login(data: z.infer<typeof loginViewFormSchema>) {
  const validateFields = loginViewFormSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Logged in!" };
}
