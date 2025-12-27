import "dotenv/config";
import express from 'express';

// Les variables d'environnement'
import { PORT, NODE_ENV } from './config/env.js';

// Les middlewares
import cors from 'cors';
import errorMiddleware from "./middlewares/error.middleware.js";

// Les routes
import helloRouter from "./routes/hello.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/hello-world', helloRouter)

app.get('/', (req, res) => {
  res.send('Welcome to Gesti API')
})

app.use(errorMiddleware)

app.listen(PORT, () =>
  console.log(`Gesti is running on port http://localhost:${PORT} in ${NODE_ENV} mode`)
)