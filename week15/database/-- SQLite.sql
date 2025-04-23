-- SQLite
create table gemCharacters (
    gemID integer primary key autoincrement,
    name text not null
);

select * from gemCharacters;

delete from gemCharacters
where gemId in (2,3);

create table users (
    userID integer primary key,
    email text not null
);

insert into users (email) values
('fralcala@iu.edu');

select * from users;

create table userSavedGems (
    savedGemId integer primary key,
    userID integer,
    gemID integer
);

select * from userSavedGems;

insert into userSavedGems (userID, gemId)
VALUES
(1,1),
(1,4),
(1,8),
(1,10),
(2,5),
(2,9),
(2,11);

select * from users
left join userSavedGems usg
    on users.userID = usg.userID
left join gemCharacters gc
    on usg.gemID =
    gc.gemID
;

--Create
--Read
--Update
--Delete
