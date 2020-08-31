import express, { Request, Response, NextFunction } from 'express';

const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ error: null, message: "Route D endpoint hit" });
})

module.exports = { router };
