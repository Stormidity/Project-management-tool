const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Collaborative Project Management Tool API is running')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})