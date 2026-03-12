# 🚀 Notas para Práctica de Endpoints en NestJS

API básica creada con **NestJS** para practicar la creación de **endpoints REST y operaciones CRUD** sobre usuarios.

---

## 🌐 Base URL

http://localhost:4001

---

## 📡 Endpoints

### 🟢 Bienvenida → Origen

[GET](http://localhost:4001/)

Respuesta:

```
Hola mundo, Yo soy Alejandro, desde NestJs!
```

---

### 👥 Desplegar todos los usuarios

[GET](http://localhost:4001/users)

Return all users **(200)**

---

### 🔎 Buscar un usuario en específico (Parámetro)

[GET](http://localhost:4001/users/1) → Return user **1** (200)

[GET](http://localhost:4001/users/2) → Return user **2** (200)

---

### ➕ Crear un usuario

[POST](http://localhost:4001/users)

Return the user created **(201)**

---

### ❌ Eliminar un usuario

[DELETE](http://localhost:4001/users/:id)

Return status user deleted **(200)**

---

### ✏️ Actualizar un usuario

[PUT](http://localhost:4001/users/:id)

Return updated user **(200)**

---

## 🛠 Tecnologías utilizadas

- NestJS
- TypeScript
- Node.js
- REST API

---

📌 **Nota:**  
Este proyecto hace parte de una práctica para comprender la estructura de controladores y rutas en **NestJS** mediante la implementación de un CRUD básico de usuarios.