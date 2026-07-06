import express from "express";
import {emailQueue} from './queue.js';
const app = express();
app.use(express.json());

app.post('/emails', async (req, res) => {
  const { to, subject, body } = req.body;
  try {
    await emailQueue.add('email', { to, subject, body },
        {
            attempts: 3,
            backoff:{
                type: 'exponential',
                delay: 1000
            },
        }
    );
    res.status(200).json({ message: 'Email added to queue' });
  } catch (error) {
    console.error('Error adding email to queue:', error);
    res.status(500).json({ message: 'Error adding email to queue' });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});