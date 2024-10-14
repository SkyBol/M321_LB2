# README #

## Starter Project Spring Boot



### Docker command
```
docker run --name postgres_db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

### Troubleshooting

```
org.postgresql.util.PSQLException: ERROR: relation "role_authority" does not exist
```
Simply restart the application. Hibernate sometimes does not initialize the tables fast enough an causes thios error. restarting the application fixes this.

##### Lombok operations are red

Confirm you have the suggested Lombok Plugin installed.