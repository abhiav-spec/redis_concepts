import express from "express";
import Redis from "ioredis";

const app = express();
const redis = new Redis({
  host: "localhost",
  port: 6379,
});

app.use(express.json());

app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await redis.get(`user:${userId}`);
  if (user) {
    res.json(JSON.parse(user));
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.post("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  await redis.set(`user:${userId}`, JSON.stringify(user));
  res.json({ message: "User created successfully" });
});

app.get("/user/:id/hash", async (req, res) => {
  const userId = req.params.id;
  const userHash = await redis.hgetall(`user:${userId}:hash`);
  if (Object.keys(userHash).length > 0) {
    res.json(userHash);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.post("/user/:id/hash", async (req, res) => {
  const userId = req.params.id;
  const userHash = req.body;
  await redis.hmset(`user:${userId}:hash`, userHash);
  res.json({ message: "User hash created successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

