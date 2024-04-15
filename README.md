Proyecto C.R.U.D utilizando MongoDB, Mongoose, Express, Node.js, React y Tailwind CSS
Este proyecto es un ejemplo de una aplicación web que implementa las operaciones básicas de Crear, Leer, Actualizar y Eliminar (C.R.U.D) utilizando tecnologías como MongoDB, Mongoose, Express y Node.js en el backend, y React con Tailwind CSS en el frontend. Además, se incluye un sistema de autenticación de usuarios con JWT y validación de datos utilizando Zod.

Requisitos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

Node.js
MongoDB
Express
Mongoose
Zod
JWT
Vite
Tailwind

Instalación
Clona este repositorio en tu máquina local:

git clone https://github.com/caapuu-nico/C.R.U.D.git

Ve al directorio del proyecto:

cd C.R.U.D

Instala las dependencias del servidor y del cliente:

npm install
cd client
npm install

Configura tu archivo .env tanto en el directorio raíz como en el directorio client, basándote en los archivos .env.example.

Uso
Inicia el servidor:
npm run dev
mongod

Inicia el cliente (en una nueva terminal dentro del directorio client):
npm run dev

Accede a la aplicación en tu navegador web: http://localhost:3000

Funcionalidades
C.R.U.D: La aplicación permite crear, leer, actualizar y eliminar registros desde una interfaz amigable y responsive.
Autenticación de usuarios: Utiliza JWT para autenticar usuarios y proteger rutas privadas.
Validación de datos: Se implementa validación de datos utilizando Zod para garantizar la integridad de la información.
Tecnologías Utilizadas

Backend:

MongoDB
Mongoose
Express
Node.js

Frontend:

React
Tailwind CSS




