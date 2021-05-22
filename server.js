const express = require('express');
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');

var cors = require('cors');

const postRoutes = require('./routes/api/posts');

const app = express();

app.use(express.json());
app.use(cors());

//Connect to MongoDB
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err))

app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
