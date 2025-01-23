const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const app = express();
const port = 5001;
dotenv.config();

connectToMongoDB(
    "mongodb+srv://kashishmeghani11:szh2nHxL7cb2tFcy@cluster0.t05zt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("MongoDB connected"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello!!");
});

app.use("/url", urlRoute);
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