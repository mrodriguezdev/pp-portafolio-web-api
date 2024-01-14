import { Request, Response, NextFunction } from "express";

const asyncWrapper = (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

export { asyncWrapper };