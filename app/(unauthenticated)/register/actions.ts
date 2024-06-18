"use server";

import { registrationViewFormSchema } from "@/views/registration-view";
import { z } from "zod";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_URL;

export async function register(
  data: z.infer<typeof registrationViewFormSchema>
) {
  const validateFields = registrationViewFormSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  try {
    await axios.post("/api/register", data);
    return { success: "Registration successfull" };
  } catch (error) {
    return { error: "Registration failed" };
  }
}
