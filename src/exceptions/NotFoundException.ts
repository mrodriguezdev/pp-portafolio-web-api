import { CustomException } from "./CustomException";

class NotfounException extends CustomException {
    constructor(message: string) {
        super(404, `${message}`);
    }
}

export { NotfounException };