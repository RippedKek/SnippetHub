import express from 'express'
import { configDotenv } from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/config.js'

import userRouter from './routes/userRoute.js'
import snippetRouter from './routes/snippetRoute.js'

const app = express()

configDotenv()
connectDB()

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use('/users', userRouter)
app.use('/snippets', snippetRouter)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
