import { Request, Response } from "express";
import { emailService } from "../services/email";
import { asyncWrapper } from "../exceptions/ExceptionWrapper";

const sendMail = asyncWrapper(async (req: Request, res: Response) => {
    const { body } = req;
    emailService.sendMailByMailer(body);
    res.send('Email sent successfully');
});

export { sendMail };
