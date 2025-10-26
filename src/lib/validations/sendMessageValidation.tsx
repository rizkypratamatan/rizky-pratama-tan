import z from "zod";


const sendMessageValidation = z.object({
    email: z.email(),
    message: z.string().trim().min(10, {message: 'Message must be at least 10 characters'}),
    name: z.string().trim().min(3, {message: 'Full name must be at least 3 characters'}),
    token: z.string()
});

export default sendMessageValidation;
