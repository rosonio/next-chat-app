"use server";

import { getPasswordResetTokenByToken } from "@/app/actions/getPasswordResetTokenByToken";
import { getUserByEmail } from "@/app/actions/getUserByEmail";
import { resetPasswordViewFormSchema } from "@/views/reset-password-view";
import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";

export const changePassword = async (
  data: z.infer<typeof resetPasswordViewFormSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: "Missing token!" };
  }

  const validatedFields = resetPasswordViewFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { newPassword } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid token" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12);

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { hashedPassword },
  });

  await prisma.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password updated" };
};
