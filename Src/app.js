import taskRoutes from './Routes/tasks.routes.js';
import authRoutes from './Routes/auth.routes.js';
import cookieParser from "cookie-parser";

import express from "express";
import morgan from "morgan";
import cors from 'cors';

export const app = express();

app.use(cors({
    origin: 'https://servitechfront.vercel.app',
    credentials: true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://servitechfront.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(morgan('dev'));

app.use(express.json());

app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
