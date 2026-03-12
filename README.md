# 🚀 Notas para Práctica de Endpoints en NestJS

API básica creada con **NestJS** para practicar la creación de **endpoints REST y operaciones CRUD**.

---

## 🌐 Base URL

`http://localhost:4001`

---

## 📡 Endpoints

### 🟢 Bienvenida → Origen

[URL](http://localhost:4001/)

Ruta:

`/`

Respuesta:

```
Hola mundo, Yo soy Alejandro, desde NestJs!
```

---

### 👥 Desplegar todos los usuarios

[GET](http://localhost:4001/users)

Ruta:

`/users`

Descripción:

Return all users **(200)**

---

### 🔎 Buscar un usuario en específico (Parámetro)

[GET](http://localhost:4001/users/1)

Ruta:

`/users/:id`

Descripción:

Return user by id **(200)**

---

### ➕ Crear un usuario

[POST](http://localhost:4001/users)

Ruta:

`/users`

Descripción:

Return the user created **(201)**

---

### ✏️ Actualizar un usuario

[PUT](http://localhost:4001/users/:id)

Ruta:

`/users/:id`

Descripción:

Return updated user **(200)**

---

### ❌ Eliminar un usuario

[DELETE](http://localhost:4001/users/:id)

Ruta:

`/users/:id`

Descripción:

Return status user deleted **(200)**

---

## 🛠 Tecnologías utilizadas

- NestJS
- TypeScript
- Node.js
- REST API

📌 **Nota:**  
Este proyecto hace parte de una práctica para comprender la estructura de controladores y rutas en **NestJS** mediante la implementación de un CRUD básico de usuarios.