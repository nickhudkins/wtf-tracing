import express from 'express';

const app = express();

app.use("/that", (req, res) => {
    res.sendStatus(200)
})

app.listen(3001)
