import Koa from "koa"
import bodyParser from "koa-bodyparser"
import { AppDataSource } from "./infrastructure/database/database"
import routes from "./adapter/routes/routes"
import { authMiddleware } from "./adapter/middlewares/authMiddleware"

const app = new Koa()

// Middleware
app.use(bodyParser())
app.use(authMiddleware)

// Connect to database
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// Routes
app.use(routes.routes())
app.use(routes.allowedMethods())

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})
