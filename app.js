const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

// const items = ['Work Out', 'Coding', 'Read News'];
// //we can push items into array with const
// let workLists = [];


//datebase
mongoose.connect('mongodb://localhost:27017/todolistDB');

const itemsSchema = {
    name: "String"
}

const Item = mongoose.model("Item", itemsSchema);

const item1 = Item({
    name: "Welcome to your todolist!"
})
const item2 = Item({
    name: "Hit + button to add new item."
})
const item3 = Item({
    name: "<-- Hit this to delete an item."
})

const defaultItems = [item1, item2, item3];


//route

app.get('/', (req, res) => {

    Item.find((err, foundItems) => {

        if(foundItems.length === 0){
            Item.insertMany(defaultItems, (err)=>{
                if(!err){
                    console.log("Insert Completed.")
                }
            });

            res.redirect('/');
        }else{
            res.render('index', {
                ListTitle: 'Today',
                items: foundItems
            });
        }    
    })
})




app.get('/work', (req, res) => {
    res.render('index', {
        ListTitle: 'Work',
        items: workLists
    });
})

app.post('/', (req, res) => {
    //create a new document

    const newItem = Item({
        name : req.body.text
    })

    //save 

    newItem.save();

    res.redirect('/');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
})