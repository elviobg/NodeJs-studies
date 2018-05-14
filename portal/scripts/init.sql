create database news_portal;

use news_portal;

create table news (
    id int not null auto_increment,
    title varchar(100),
    report text,
    creation_date timestamp default current_timestamp,
    PRIMARY KEY (id)
);