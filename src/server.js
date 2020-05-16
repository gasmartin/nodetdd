const express = require('express');

const converter = require('./converter');

const app = express();

app.use(express.json());

app.get("/rgbToHex", (req, res) => {
    const red = parseInt(req.query.red, 10);
    const green = parseInt(req.query.green, 10);
    const blue = parseInt(req.query.blue, 10);

    const hex = converter.rgbToHex(red, green, blue);

    res.json({ hex });
});

app.get('/hexToRgb', (req, res) => {
    const hex = req.query.hex;

    const rgb = converter.hexToRgb(hex);

    res.json({ rgb });
});

app.listen(3000, () => {
    console.log("Server is running at port 3000")
});
