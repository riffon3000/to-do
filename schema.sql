CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todo (
id int auto_increment not null,
todo varchar(100) not null,
done boolean default 0,
timestamp datetime
)