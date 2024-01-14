import { NextFunction } from "express";
import { EmailDTO } from "../interfaces/email.interface";
import { NotfounException } from "../exceptions/NotFoundException";

const sendMailByMailer = (body: any) => {
    throw new NotfounException('Funcionó')
}

const createEmailDTO = (body: any, next: NextFunction) => {
    const emailDTO: EmailDTO = {
        asunto: "",
        correo: "",
        mensaje: "",
        nombre: ""
    };
    emailDTO.mensaje = body.mensaje;
    emailDTO.asunto = body.asunto;
    console.log(emailDTO)
    next();
}

export const emailService = { sendMailByMailer };