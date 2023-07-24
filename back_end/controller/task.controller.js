// const {addTaskTable,allTasks,singleTask,editTask,removeTask} = require('../service/task.service')
const pool = require('../model/db')

const taskTable= (data, callback) => {

    //inserting data to tasks table
    pool.query(`INSERT INTO tasks(title,description,status)VALUES(?,?,?)`,
        [
            data.title,
            data.description,
            data.status,  
        ],
        (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        }
    );

}

const allTask= (callback )=>{
    pool.query(`SELECT  * FROM tasks`,[], 
    (err, results)=>{
        if(err) return callback(err);
        return callback(null, results);
    });
}

const editTask=(data, callback)=>{
    pool.query(`UPDATE tasks SET title = ?, description = ?, status = ? Where id = ?`,
    [
        data.title,
        data.description,
        data.status,
        data.id],
    (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    })
    
}
const removeTask=(data, callback)=>{
    pool.query(`DELETE FROM tasks WHERE id = ?`,[data],
    (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    })
}
const singleTask= (data, callback) => {
    pool.query(`SELECT * FROM tasks WHERE id = ?`,[data],
    (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    })
}

module.exports = {
    addTask:(req, res)=>{
        const {title} = req.body;
        if(!title){
            return res.status(400).json({
                msg:"the task field is not provided",
            });
        }
        taskTable(req.body,(err,result)=>{
            if(err){
                return res.status(500).json({
                    msg: "database connection error",
                });
            }
            return res.status(200).json({
                msg: 'Task added succesfully',
                data: result,
            })

        })
    },
    updateTask:(req, res)=>{
        const {title} = req.body;
        const {id}=req.params;
        const data ={
            ...req.body,
            id
        }
        console.log(data);
        console.log(req.body);
        if(!title){
            return res.status(400).json({
                msg:"the task field is not provided",
    
            });
        }
        editTask(data,(err,result)=>{
            if(err){
                return res.status(500).json({
                    msg: "database connection error",
                });
            }
            return res.status(200).json({
                msg: 'Task edited succesfully',
                data: result,
            })
    
        })
    },
    deleteTask: (req, res) => {
        removeTask(req.params.id, (err, result) => {
            if (err)
                return res.status(500).json({
                    msg: "database connection error!",
                });
            return res.status(200).json({
                data: result,
            });
        });
    },
    getTask: (req, res) => {
        singleTask(req.params.id, (err, result) => {
            if (err)
                return res.status(500).json({
                    msg: "database connection error!",
                });
            return res.status(200).json(result[0]);
        });
    },

    getAllTasks: (req, res) => {
        
        allTask((err, result) => {
            if (err)
                return res.status(500).json({
                    msg: "database connection error",
                });
            return res.status(200).json(result);
        });
    }
}

