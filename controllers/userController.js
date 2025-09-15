const Task = require("../models/userModel");

//get all user
const getTasks= async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

// create new user
const createTask = async (req, res) =>{
    try{
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    }catch(error){
        res.status(400).json({message:error.message});
    }

};

// UPDATE task (toggle completed)
const updateTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(task);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  const deleteTask = async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.json({ message: "Task deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {getTasks, createTask, updateTask, deleteTask};