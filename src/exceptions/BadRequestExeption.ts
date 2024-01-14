import { CustomException } from "./CustomException";

class BadRequestException extends CustomException {
    constructor(message: string) {
        super(400, `${message}`)
    }
}

export { BadRequestException };