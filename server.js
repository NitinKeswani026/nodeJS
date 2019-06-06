var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var app = express();
var knex = require('./db/knex');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/students/get', function (req, res) {
    knex.select().from('students').then(function (students) {

        res.send(students);
    })
})

app.get('/students/get/:id', function (req, res) {
    knex.select().from('students').where('id', req.params.id).then(function (students) {
        res.send(students);
    })
})

app.post('/students/post', function (req, res) {
    let data = req.body;
    knex("students").insert(data)
        .then(function () {
            knex.select().from('students').then(function (students) {

                res.send(students);
            })
        })
})

app.put('/students/put/:id', function (req, res) {
    let data = req.body;
    knex('students').where('id', req.params.id).update(data).then(function (students) {
        knex.select().from('students').then(function (students) {

            res.send(students);
        })
    })
})

app.delete('/students/delete/:id', function (req, res) {
    knex('students').where('id', req.params.id).del()
        .then(function (students) {
            res.send("Deleted");
            // knex.select().from('students').then(function (students) {

            //     res.send(students);
            // })
        })
})






app.listen(port, function () {
    console.log("Listening on port: ", port);
});