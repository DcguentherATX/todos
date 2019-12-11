DROP DATABASE IF EXISTS tasks;


CREATE DATABASE tasks;

USE tasks;


CREATE TABLE IF NOT EXISTS todos(id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                                                                        todo VARCHAR(75) NOT NULL,
                                                                                         createdDate DATE NOT NULL,
                                                                                                          completionDate DATE NOT NULL);