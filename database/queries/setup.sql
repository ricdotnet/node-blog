drop table if exists comment;
drop table if exists post;
drop table if exists user;

create table user (
  id integer primary key auto_increment,
  username varchar(20) not null unique,
  password varchar(500) not null,
  email varchar(255) not null unique,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default null
);

create table post (
  id integer primary key auto_increment,
  title varchar(255) not null,
  content text not null,
  user integer default 1,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default null,
  foreign key (user)
    references user (id)
    on delete cascade
);

create table comment (
  id integer primary key auto_increment,
  content text not null,
  user integer default 1,
  post integer not null,
  createdAt timestamp default current_timestamp,
  foreign key (user)
    references user (id)
    on delete cascade,
  foreign key (post)
    references post (id)
    on delete cascade
)