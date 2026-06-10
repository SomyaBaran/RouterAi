import { t } from "elysia";

export namespace AuthModal {
    // sign-in
    const singinSchema = t.Object({
        email: t.String(),
        password: t.String()
    })
    export type singinSchema = typeof singinSchema.static

    const signinResponseSchema = t.Object({
        token: t.String()
    })
    export type signinResponseSchema = typeof signinResponseSchema.static


    // sign-up
    const singupSchema = t.Object({
        email: t.String(),
        password: t.String()
    })
    export type singupSchema = typeof singinSchema.static

    const signupResponseSchema = t.Object({
        token: t.String()
    })
    export type signupResponseSchema = typeof signinResponseSchema.static
}