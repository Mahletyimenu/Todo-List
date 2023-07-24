//create task table
const taskTable = `create table if not exists Tasks(
    id int auto_increment,
    title varchar(255) not null,
    description varchar(255),
    status varchar(20),
    primary key(id)
);`;

module.exports=taskTable