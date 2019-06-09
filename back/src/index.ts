import dotenv from 'dotenv'
import Express from 'express'
import Api from './routes/api'
import ErrorMiddleware from './middlewares/error'
import cors from 'cors'
dotenv.config()

const App = Express()

App
.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
.use(Express.json())
.use('/', Api)
.use(ErrorMiddleware)
.listen(process.env.PORT, () => {
    console.log(`Server listen on port ${process.env.PORT}`)
})