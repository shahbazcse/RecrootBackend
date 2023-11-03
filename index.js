require('./db/db.connection');

const express = require('express');
const app = express();
app.use(express.json());

const volunteerRouter = require("./routes/volunteers.router");
const eventRouter = require("./routes/events.router");

const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:3000', 'https://recroot.vercel.app'],
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send("Hello, Express!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});

app.use('/volunteers', volunteerRouter);
app.use('/events', eventRouter);