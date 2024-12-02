import { z } from "zod";

export const SignUpSchema = z.object({
    email: z.string().email("Неправильный email").default(""),
    name: z.string().min(1, "Укажите имя"),
    password: z.string().min(6, "Длинна пароля минимум 6 символов"),
    checked: z.boolean()
})

export type SignUpSchemaData = z.infer<typeof SignUpSchema>
