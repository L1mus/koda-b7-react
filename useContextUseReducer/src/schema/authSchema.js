import * as z from "zod";

const authschemaValidation = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .max(36, { message: "Email to long" })
      .email(),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password minimum 8 characters" }),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Password not match",
    path: ["confirmpassword"],
  });

export default authschemaValidation;
