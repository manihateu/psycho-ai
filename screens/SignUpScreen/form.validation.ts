import { z } from "zod";

export const SignUpSchema = z.object({
    email: z.string().email("Укажите email").default(""),
    name: z.string().min(1, "Укажите имя").default(""),
    password: z.string().min(6, "Длинна пароля минимум 6 символов").default(""),
    checked: z.boolean().default(false)
})

export type SignUpSchemaData = z.infer<typeof SignUpSchema>
