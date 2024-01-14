import { Request, Response, Router } from "express";
import { routerEmail } from "./email";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello from Portafolio Web API by mrodriguezdev :)',
        version: '1.0.0'
    });
});

router.use('/email', routerEmail)

export { router };