import express from "express"
import Redis from "ioredis"

const app = express();
app.use(express.json());
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

app.get("/", async (req, res) => {
    const reply = await redis.ping();
    res.json({ message: `Redis ping response: ${reply}` });
});

//we are creating a queue to store the emails that we want to send
app.post("/email", async (req, res) => {
    const job={
        to: req.body.to,
        subject: req.body.subject,
        body: req.body.body,
        createdAt: new Date().toISOString()
    }
    await redis.lpush("email_queue", JSON.stringify(job));
    res.json({ message: "Email added to queue" });
});

app.get("/email", async (req, res) => {
    const job = await redis.rpop("email_queue");
    if (job) {
        res.json({ message: "Email retrieved from queue", job: JSON.parse(job) });
    } else {
        res.json({ message: "No emails in queue" });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});