import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [videoUrl, setVideoUrl] = useState('');
    const [format, setFormat] = useState('mp4');

    const downloadVideo = () => {
        axios.get(`http://localhost:5000/download?url=${videoUrl}&format=${format}`)
            .then(response => {
                window.location.href = response.config.url;
            })
            .catch(error => console.error('Error downloading the file:', error));
    };

    return (
        <div>
            <h1>YouTube Video Downloader</h1>
            <input
                type="text"
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
                placeholder="Enter YouTube URL"
            />
            <select value={format} onChange={e => setFormat(e.target.value)}>
                <option value="mp4">MP4</option>
                <option value="mp3">MP3</option>
            </select>
            <button onClick={downloadVideo}>Download</button>
        </div>
    );
}

export default App;
