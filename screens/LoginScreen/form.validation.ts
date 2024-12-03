import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Укажите email").default(""),
    password: z.string().min(6, "Длинна пароля минимум 6 символов").default(""),
})

export type LoginSchemaData = z.infer<typeof LoginSchema>
