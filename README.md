# Notas para Practica de endpoint en NestJs

## Endpoints
### Bienvenida -> Origen
[GET][http://](http://localhost:4001/)

    Hola mundo, Yo soy ALejandro, desde NestJs!
### Desplegar Todos los usuarios
[GET][http://](http://localhost:4001/users) > Return all users (200)
### Buscar un usuario en especifico (Parametro)
[GET][http://](http://localhost:4001/users/1) > Return users 1 (200)
[GET][http://](http://localhost:4001/users/2) > Return users 2 (200)

[POST][http://](http://localhost:4001/users) > return the user created (201)

[DELETE][http://](http://localhost:4001/users/:id) > return status user deleted (200)

[PUT][http://](http://localhost:4001/users/:id) > 