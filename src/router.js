import { response, Router } from "express";
import User from "./database/schema/User.js";
import { userAuthController, userAuthSignController, userCreateController, userFetchController } 
from "./user/controller.js";

const userRouter = Router();

userRouter.get("/fetch", userFetchController);

userRouter.post("/create", userCreateController); 

userRouter.post("/auth", userAuthController);

userRouter.post("/authsign", userAuthSignController);

export { userRouter };