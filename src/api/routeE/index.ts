import express, { Request, Response, NextFunction } from 'express';

const router = express.Router()

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ error: null, message: "Route E endpoint hit with id: " + req.params.id });
})

module.exports = { router };
