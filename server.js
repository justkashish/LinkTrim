const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const urlRoute = require("./routes/urlRouter");
const authRouter = require("./routes/authRouter");
const URL = require("./models/url");
const app = express();
const port = process.env.PORT || 8080;
require('./connect');

dotenv.config();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from my MERN app");
});
app.use("/url", urlRoute);
app.use("/auth", authRouter);

app.get('/:shortId', async(req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },

        },
    });
    res.redirect('https://' + entry.redirectURL);
});
app.get('/analytics/:shortId', urlRoute);

app.listen(port, () => {
    console.log(`Server started successfully on port : ${port}`);
});