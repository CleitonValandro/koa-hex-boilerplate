import Router from "koa-router"
import { UserController } from "../../application/controllers/userController"

const router = new Router()
const userController = new UserController()

router.post("/users", async (ctx) => await userController.set(ctx))
router.get("/users", async (ctx) => await userController.get(ctx))
router.get("/users/:id", async (ctx) => await userController.getOne(ctx))

export default router
