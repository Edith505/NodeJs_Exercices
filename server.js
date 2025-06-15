import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import indexRouter from './routes/indexRouter.js'; 
import userRoutes from './routes/userRouters.js';

// Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Set up routes
app.use('/', indexRouter);
app.use('/api/users', userRoutes); 

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {})
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

export default app;

