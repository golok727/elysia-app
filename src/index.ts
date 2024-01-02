import { Elysia } from "elysia";
import * as Routes from "./route";

const app = new Elysia();

app.get("/", Routes.home);
app.get("/healthcheck", Routes.healthcheck);
app.get("/hello/:name", Routes.hello);
app.get("/users", Routes.users);
app.get("/users/:id", Routes.usersWithId);

app.listen(3000, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
  );
});
