const express = require('express');
const mongoose = require('mongoose');

const app = express();

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

app.get('/', (req, res) => {

});
