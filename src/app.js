const path = require('path') ;
const express = require('express') ;
const dotEnv = require('dotenv');
dotEnv.config() ;
const retry = require('./config/db')
const apiRouter = require('./routes/api') ;
const loginRouter = require('./routes/login');
retry()
const app = express() ;
app.disable('x-powered-by');
app.use(express.json()) ;
app.use(express.urlencoded({extended:false})) ;
app.use('/public',express.static(path.join(__dirname,'public')))
app.set('view engine','pug') ;
app.set('views',path.join(__dirname,'views'));
app.use('/api',apiRouter) ;
app.use('/login',loginRouter)
app.get('/',(req,res)=>{
    res.render('index',{title:"Welcome To MY APP"})
})
app.use(function (req,res,next) {
    res.statusCode = 404;
    next() ;
})
app.use(function (req,res) {
    res.json({message:"Can't find the required module"})
})
module.exports = app  ;
