const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true})
    .then(()=>{
        require('./models/user');
        console.log('db success');
    })

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}))

routes.routeInit(app);

app.listen('3000', ()=> {
    console.log('ㅅㅓ버 시작');
})