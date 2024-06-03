CREATE DATABASE node_to_do_list;

CREATE TABLE to_do_list (
    id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
