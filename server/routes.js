const express = require('express');
const router = express.Router()

const {getConnectedClient} = require("./database");
const {ObjectId} = require("mongodb");

const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db("todosdb").collection("todos");
    return collection;
}

// GET
router.get("/todos",async(req,res) => {
   const collection = getCollection();
   const todos = await collection.find({}).toArray();
 
   res.status(200).json(todos);
})

// POST 
router.post("/add" , async (req,res) => {
    const collection = getCollection();
    const { todo , description , category , date } = req.body;

    if(!todo){
        return res.status(400).json({msg:"Error on inserting data"});
    }

  

    const newTodo = await collection.insertOne({todo,description,category,date,status:false});
    
    res.status(201).json({todo, status:false, _id:newTodo.insertedId});

})

// DELETE 
router.delete("/todos/:id" , async (req,res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);

    const deletedTodo = await collection.deleteOne({_id});
    res.status(200).json(deletedTodo);
})

// PUT
router.put("/todos/:id" , async (req,res) => {
  
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);

    const statusUpdated = req.body.item.todoStatusUp;
    const nameUpdated = req.body.item.todoName;
    const descUpdated = req.body.item.todoDesc;
    const catUpdated = req.body.item.todoCat;

    const updatedTodo = await collection.updateOne(
        { _id },
        { 
            $set: { 
                status: statusUpdated, 
                todo: nameUpdated,
                category:catUpdated,
                description:descUpdated
            } 
        }
    );

    res.status(200).json(updatedTodo);
})
router.put("/todos/completed/:id" , async (req,res) => {
  
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
   
    const updatedTodo = await collection.updateOne(
        { _id },
        { 
            $set: { 
                status: true, 
            } 
        }
    );

    res.status(200).json(updatedTodo);
})

module.exports = router;