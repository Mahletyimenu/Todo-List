// const database = require("../index")

// module.exports={
//     addTaskTable:(data,callback)=>{
//         database.query(`INSERT INTO tasks(title,description,status)VALUES(?,?,?)`,
//         [
//             data.title,
//             data.description,
//             data.status
            
//         ],
//         (err, result) => {
//             if (err) {
//                 return callback(err);
//             }
//             return callback(null, result);
//         }
//     )},
    
    
//     allTasks:(callback )=>{
//         database.query(`SELECT * FROM tasks`,[], 
//         (err, results)=>{
//             if(err) return callback(err);
//             return callback(null, results);
//         });
//     },
    
//     singleTask: (data, callback) => {
//         database.query(`SELECT * FROM tasks WHERE id = ?`,[data.id],
//         (err, result) => {
//             if (err) {
//                 return callback(err);
//             }
//             return callback(null, result);
//         })
//     },
    
//     editTask:(data, callback)=>{
//         database.query(`UPDATE tasks SET title = ?, description = ?, status = ? id = ?`,
//         [
//             data.title,
//             data.description,
//             data.status,
//             data.id],
//         (err, result) => {
//             if (err) {
//                 return callback(err);
//             }
//             return callback(null, result);
//         })
       
//     },
    
//     removeTask:(data, callbac)=>{
//         database.query(`DELETE FROM tasks WHERE id = ?`,[data.id],
//         (err, result) => {
//             if (err) {
//                 return callback(err);
//             }
//             return callback(null, result);
//         })
//     }
// }