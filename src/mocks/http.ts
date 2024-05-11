/* eslint-disable no-console */
import { createMiddleware } from '@mswjs/http-middleware';

import { handlers } from './handlers';

import cors from 'cors';
import express from 'express';

const app = express();
const port = 9090;

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);
app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
