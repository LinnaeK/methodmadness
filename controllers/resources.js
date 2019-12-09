const Todo = require("../models/list")

module.exports = {
    new: newResource,
    delete: deleteResource,
}

function newResource(req, res){
    Todo.findById(req.params.id, function(err, todo){
        console.log("THIS IS REQ.BODY", req.query)
        todo.resources.push(req.query.resources)
        todo.save()
        console.log(req.params.id)
        res.redirect('/todos/'+req.params.id)
    })
}

function deleteResource(req, res){
    Todo.findById(req.params.id, function(err, todo){
        todo.resources.splice(req.params.i, 1)
        todo.save()
        res.redirect('/todos/' + req.params.id)
    })
}