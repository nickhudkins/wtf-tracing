import express from 'express';
import axios from 'axios';

const client = axios.create({
    baseURL: "http://localhost:3001"
})

const app = express();

app.use("/this", (req, res) => {
    client.get("/that").then(() => {
        res.sendStatus(200)
    })
})

app.listen(3000)
