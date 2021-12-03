const express = require('express');
const expressFileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const router = require('./routers/router.js');

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(expressFileUpload({}));
app.use('/api', router);

app.listen(3000, () => console.log('server has been started'));

async function start(){
    try {
        await mongoose.connect('mongodb+srv://root:Pa$$w0rd@cluster0.xrykd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
        })
        console.log('database successfully connected');
    } catch (e) {
        console.log(e);
    }
}

start();
