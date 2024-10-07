import { AppDataSource } from "./infra/database/database";
import routes from "./infra/routes/routes";
import { authMiddleware } from "./application/middlewares/authMiddleware";
import Koa from "koa";
import bodyParser from "koa-bodyparser";

export const usersModule = (app: Koa) => {
    // Middleware
    app.use(bodyParser());
    app.use(authMiddleware);

    // Connect to database
    AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err);
        });

    // Routes
    app.use(routes.routes());
    app.use(routes.allowedMethods());
};