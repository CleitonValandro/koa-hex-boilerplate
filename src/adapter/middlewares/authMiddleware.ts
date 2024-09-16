import { Context, Next } from "koa"

export async function authMiddleware(ctx: Context, next: Next) {
    // Future implementation of authentication
    await next()
}
