//to activate debugger
// 1) press ctrl+shift+p
// 2) write in search auto
// 3) chose Debugg: Toggle auto attach
// 4) Always 
// 5) restart terminal


// targil: 
// on  /    return index.ejs 
// on /sarah return sarah.ejs

const express = require('express');
const app = express();

app.use(express.static('public')) //

const PORT = 3000;

app.get('/', (req, res) => {

    console.log(req.query);

    const data = {
        firstName: req.query.name,
        lastName: req.query.lastname
    }

    // const jsonObj = [{
    //     "name": "Sarah",
    //     "lName": "Conor"
    // }, {
    //     "name": "Ryu",
    //     "lName": "Tatsumaki"
    // }]
    // res.status(200);
    // res.json(jsonObj);    


    // res.render('index.ejs', data)

    // res.redirect('http://google.com')
    res.redirect('/sarah')
})

app.get('/sarah', (req, res) => {
    res.render('sarah.ejs')
}) 

app.get('/beni', (req, res) => {
    console.log('__dirname: ', __dirname)
    console.log('I am beni :))')
    res.download(__dirname + '/files/car.jpg')
})

app.listen(PORT, () => {
    console.log(`Express is running on port ${PORT}`)
})