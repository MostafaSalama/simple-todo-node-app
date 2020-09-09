const path = require('path') ;
const express = require('express') ;
dotEnv.config() ;

const app = express() ;
app.use(express.json()) ;
app.use(express.urlencoded({extended:false})) ;
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','pug') ;
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
    res.render('index',{title:"Welcome To MY APP"})
})
module.exports = app  ;
