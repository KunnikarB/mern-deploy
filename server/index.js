import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routes/itemRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import playSessionRoutes from './src/routes/playSessionRoutes.js';
import gamesRoutes from './src/routes/gameRoutes.js';
import authRoutes from './src/routes/authRoutes.js';


dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://mern-project-client-dusky.vercel.app',
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/games', gamesRoutes);
app.use('/play-sessions', playSessionRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Could not connect to MongoDB'));

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });

export default app;