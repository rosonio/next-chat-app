"use server";

import { getUserByEmail } from "@/app/actions/getUserByEmail";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/token";
import { forgotPasswordViewFormSchema } from "@/views/forgot-password-view";
import { z } from "zod";

export const forgotPassword = async (
  data: z.infer<typeof forgotPasswordViewFormSchema>
) => {
  const validatedFields = forgotPasswordViewFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset email sent!" };
};
