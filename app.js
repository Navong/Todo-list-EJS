const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

let items = ['Work Out', 'Coding', 'Read News'];
let workLists = [];

//route

app.get('/', (req, res) => {
    const currentDate = new Date();
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var date = currentDate.toLocaleDateString('en-US', options);
    res.render('index', {
        ListTitle: date,
        items: items
    });
})

app.get('/work', (req, res) => {
    res.render('index', {
        ListTitle: 'Work',
        items: workLists
    });
})

app.post('/', (req, res) => {
    var item = req.body.text;

    if (req.body.list === 'Work') {
        workLists.push(item);
        console.log('Work');
        res.redirect('/work');
    } else {
        console.log('Date');
        items.push(item);
        res.redirect('/');
    }
    // console.log(req.body);
})

app.get('/about', (req,res)=>{
    res.render('about');
})




app.listen(3000, () => {
    console.log('Server is running on port 3000.');
})