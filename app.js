const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


var items = ['Work Out', 'Coding', 'Read News'];

app.get('/', (req, res)=>{
    const currentDate = new Date();
    var options ={
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var date = currentDate.toLocaleDateString('en-US', options);
    res.render('index',{Date: date, items: items});
})

app.post('/', (req,res)=>{
    var item = req.body.text;
    items.push(item);
    res.redirect();
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000.');
})