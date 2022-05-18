import { Router, Request, Response } from "express";

const router = Router();

router.post("/", (request: Request, response: Response) => {
  return response.status(201).send();
});

export { router };
