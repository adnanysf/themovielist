import express from 'express';
import supabase from '../config/supabaseClient.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const cardRateLimiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // Limit each IP to 1 request per second
  message: { error: 'Too many requests, please try again later.' }
});

router.get('/cards', async (req, res) => {
  const { data, error } = await supabase.from('cards').select('*');
  data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}
);

router.post('/cards', async (req, res) => {
  const { title, content } = req.body;

  try {
    const { data: titleData, error: titleError } = await supabase.from('cards').insert([{ title }]).select();
    // console.log('Title Data:', titleData);
    if (titleError) {
      console.error('Supabase Error:', titleError.message);
      return res.status(400).json({ error: titleError.message });
    }

    if (!titleData || titleData.length === 0) {
      return res.status(400).json({ error: 'Title could not be created' });
    }

    content.map(async (movieTitle, index) => {
      const movieRank = index + 1;

      const { data, error } = await supabase.from('movieRanks').insert([
        { card_id: titleData[0].id, title: movieTitle, rank: movieRank }
      ]).select();

      if (error) {
        console.error('Supabase Error:', error.message);
        return res.status(400).json({ error: error.message });
      }
    });

    res.status(201).json(titleData[0]);
  } catch (err) {
    console.error('Unexpected Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;