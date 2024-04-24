const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/download', (req, res) => {
    const url = req.query.url;
    const format = req.query.format; // 'mp4', 'mp3', etc.
    res.header('Content-Disposition', `attachment; filename="video.${format}"`);
    ytdl(url, { format: format }).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
