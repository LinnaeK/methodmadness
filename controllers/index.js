const Todo = require("../models/list")
const Method = require("../models/method")

module.exports = {
    index,
    new: newTodo,
    delete: deleteTodo,
    updateDone,
    show,
}

function index(req, res){
    Todo.find({})
    .exec(function(err, todos){
        Method.aggregate([{$sample: {size:1}}]).exec(function(err, method){
            console.log(method)
            res.render('index', { 
                title: 'Method Madness',
                user: req.user,
                name: req.query.name,
                todos,
                method,
            });
        })
    })
}

function newTodo(req, res){
    console.log(req.body)
    req.body.done = false
    Todo.create(req.body)
    res.redirect('/')
}

function deleteTodo(req, res){
    console.log(req.params.id)
    Todo.deleteOne({_id: req.params.id}, function(err){})
    res.redirect('/')
}

function updateDone(req, res){
    Todo.findById(req.params.id, function(err, todo){
        todo.done = !todo.done
        todo.save()
        res.redirect('/')
    })
}

function show(req, res){
    Todo.find({}, function(err, todos){
        Todo.findById(req.params.id, function(err, todo){
            res.render('todos/show', {
                user: req.user,
                title: 'View Todo',
                todo,
                todos
            })
        })
    })
}