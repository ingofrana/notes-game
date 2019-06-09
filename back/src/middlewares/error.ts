import {Request, Response, NextFunction} from 'express'

export default function ErrorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack)
    res.status(500).json({
        error: 'Erro interno do servidor'
    })
}