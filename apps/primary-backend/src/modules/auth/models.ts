import { t } from "elysia";

export namespace AuthModel {

    // sign-in 
    export const signinSchema = t.Object({
        email: t.String(),
        password: t.String()
    })

    export type signInSchema = typeof signinSchema.static
    export const signinResponseSchema = t.Object({
        token: t.String()
    })

    export type signinResponseSchema = typeof signinResponseSchema.static;
    export const signinFailureSchema = t.Object({
        message: t.Literal("Incorrect credentials")
    })

    export type signinFailureSchema = typeof signinFailureSchema.static;

    // sign-up
    export const signupSchema = t.Object({
        email: t.String(),
        password: t.String()
    })
    export type signupSchema = typeof signupSchema.static

    export const signupResponseSchema = t.Object({
        id: t.String(),
    })


    export const signupFailedResponseSchema = t.Object({
        message: t.Literal("error while signing up")
    })

    export type signupResponseSchema = typeof signupResponseSchema.static
    export type signupFailedResponseSchema = typeof signupFailedResponseSchema.static
}