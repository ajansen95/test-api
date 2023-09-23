const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    const posts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' }
    ];
    res.json(posts);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});