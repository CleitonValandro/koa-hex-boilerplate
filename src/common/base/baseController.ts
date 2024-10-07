import { Context } from "koa"

export class BaseController<T> {
    protected service: any
    protected resource: any

    constructor(service: any, resource: any) {
        this.service = service
        this.resource = resource
    }

    async set(ctx: Context) {
        const model = await this.service.set(ctx.request.body)
        ctx.body = this.resource.getOne(model)
    }

    async get(ctx: Context) {
        const model = await this.service.get()
        ctx.body = this.resource.get(model)
    }

    async getOne(ctx: Context) {
        const id = parseInt(ctx.params.id, 10) 
        const model = await this.service.getOne(id)
        ctx.body = this.resource.getOne(model)
    }
}
