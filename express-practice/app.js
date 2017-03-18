const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send('Hi there! Welcome to my assignment!');
});

app.get('/speak/:animal', (req, res) => {
    const animal = req.params.animal;
    const speak = (animal) => {
        if (animal === "pig") {
            return "\'Oink'";
        }
        if (animal === "cow") {
            return "\'Moo'";
        }
        if (animal === "dog") {
            return "\'Woof Woof'"
        }
        else {
            return null;
        }
    }
    res.send(`The ${animal} says ${speak(animal)}`);
});

app.get('/repeat/:word/:number', (req, res) => {
    var word = req.params.word;
    var number = parseInt(req.params.number);
    var result = '';
    var times = (word, number) => {
        for (var i = 0; i < number; i++) {
            result += word + " ";
        }
        return result;
    }
    res.send(`${times(word, number)}`);
});

app.get('*', (req, res) => {
    res.send('Sorry! Page not found!');
});

app.listen(process.env.PORT, process.env.IP);
console.log('Server running!');

