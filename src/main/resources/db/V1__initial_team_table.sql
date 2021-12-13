create table Team
(
    team_id   serial primary key,
    team_name varchar(100) not null
);

create table People
(
    people_id  serial primary key,
    first_name varchar(100) not null,
    last_name  varchar(100) not null,
    constraint fk_team
        foreign key (team_id) references Team(team_id)
)
