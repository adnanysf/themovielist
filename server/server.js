import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Express app with Supabase backend is running' });
});
app.use('/api', userRoutes);
// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

