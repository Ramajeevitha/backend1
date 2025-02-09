const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');

const app = express();
const port = 5001;
const mongoURI = 'mongodb+srv://jeevi2004:jeevi2004@cluster0.bhwi6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors());
app.use(bodyParser.json());

app.use('/api/contact', contactRoutes);

mongoose.set('strictQuery', true); // Suppress deprecation warning

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});