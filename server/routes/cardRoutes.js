import express from 'express';
import supabase from '../config/supabaseClient.js';

const router = express.Router();

router.get('/cards', async (req, res) => {
  const { data, error } = await supabase.from('cards').select('*');
  data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}
);

router.post('/cards', async (req, res) => {
  const { title, content } = req.body;
  const { titleData, titleError } = await supabase.from('cards').insert([{ title }]).select();
  //convert content to an array of ids
  content.map(async (item) => {
    const {movieTitle, movieRank} = item;
    const { data, error } = await supabase.from('movies').insert([{ card_id: titleData[0] ,title: movieTitle, rank: movieRank }]).select();
  })
  if (error) return res.status(400).json({ error: error.message });
  if (titleError) return res.status(400).json({ error: titleError.message });
    if (titleData.length === 0) {
        return res.status(400).json({ error: 'Title could not be created' });
    }
  res.status(201).json(titleData[0]);
}
);