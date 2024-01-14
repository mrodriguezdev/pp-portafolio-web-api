import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./routes/index";
import { CustomException } from "./exceptions/CustomException";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

// Middleware CustomException
router.use((err: CustomException, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send({
        status: statusCode,
        description: err.message,
    });
});

app.use(router);

app.listen(PORT, () => console.log(`Server is listening 🚀🚀`));

