import { Router } from "express";
import { sendMail } from "../controllers/email";

const routerEmail = Router();

routerEmail.post("/", sendMail);

export { routerEmail };