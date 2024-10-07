import Koa from "koa";
import { usersModule } from "./modules/data/users"; // Apenas uma importação

const app = new Koa();

// initialize modules
usersModule(app);

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});