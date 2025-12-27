import { Router } from 'express';
import { sendMessage } from "../controllers/hello.controllers.js";

const helloRouter = Router();

helloRouter.get('/', sendMessage);

export default helloRouter;