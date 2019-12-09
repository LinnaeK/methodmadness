const Todo = require("../models/list")
const Method = require("../models/method")

module.exports = {
    new: newMethod,
    create,
    delete: deleteMethod,
    show,
    index,
    edit,
    update,
}

function newMethod(req, res){
   Todo.find({}, function(err, todos){
       res.render('methods/new', {
           title: 'Add Method',
           user: req.user,
           todos
       })
   })
}

function create(req, res){
        for (let key in req.body) {
            if (req.body[key] === '') delete req.body[key];
          }
        let method = new Method(req.body)
        method.save(function(err){
            if(err) return res.redierct('/method/new')
            res.redirect('/methods/')
        })
}

function deleteMethod(req, res){
    Method.deleteOne({_id: req.params.id}, function(err, obj){})
    res.redirect('/methods/')
}

function show(req, res){
    Todo.find({}, function(err, todos){
        Method.findOne({_id: req.params.id}, function(err, method){
            console.log(method)
            res.render('methods/show', {
              user: req.user,
              title: 'View Methods', 
              method, 
              todos  
            })
        })
    })
}

function index(req, res){
    Todo.find({}, function(err, todos){
        Method.find({}, function(err, methods){
            res.render('methods/index', {
              user: req.user,
              title: 'View Methods', 
              methods, 
              todos  
            })
        })
    })
}

function edit(req, res){
    Todo.find({}, function(err, todos){
        Method.findById(req.params.id, function(err, method){
            res.render('methods/edit', {
                method,
                todos,
                title: 'Edit ' + method.name,
                user: req.user
            })
        })
    })
}

function update(req, res){
    Method.findByIdAndUpdate(req.params.id, req.body,
        {new: true}).then(function(){
            res.redirect('/methods/'+req.params.id)
        })
}


