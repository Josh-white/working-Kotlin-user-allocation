create table Team
(
    id serial primary key,
    name varchar(100) not null
);

create table CreatePerson
(
    id  serial primary key,
    first_name varchar(100) not null,
    last_name  varchar(100) not null,
    team_id bigint not null,
    constraint fk_team
        foreign key (team_id) references Team (id)
)
