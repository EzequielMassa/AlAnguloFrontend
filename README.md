
<h1 align="center"> AlAngulo</h1>
<p align="center"><img src="https://i.imgur.com/oIhevKp.png"/></p> 

## Tabla de contenidos:
---

- [Badges o escudos](#badges-o-escudos)
- [Descripción y contexto](#descripción-y-contexto)
- [Guía de usuario](#guía-de-usuario)
- [Guía de instalación](#guía-de-instalación)
- [Autores](#autores)


## Badges o escudos
---

- ![Status](https://img.shields.io/badge/STATUS-TERMINADO-blue)
- stable release version: ![version](https://img.shields.io/badge/version-1.2.3-blue)
- package manager release: ![gem](https://img.shields.io/badge/gem-2.2.0-blue)
- status of third-party dependencies: ![dependencies](https://img.shields.io/badge/dependencies-out%20of%20date-orange)
- Chrome Web Store extension rating: ![rating](https://img.shields.io/badge/rating-★★★★☆-brightgreen)
- [Uptime Robot](https://uptimerobot.com) percentage: ![uptime](https://img.shields.io/badge/uptime-100%25-brightgreen)


## Descripción y contexto
---
AlAngulo es una plataforma en línea que facilita la reserva de canchas de fútbol para los amantes de este deporte. Esta aplicación permite a los usuarios buscar, explorar y reservar canchas de fútbol en nuestro complejo de manera conveniente y eficiente. Los usuarios pueden ver detalles sobre las instalaciones disponibles, como el tipo de cancha,  las instalaciones adicionales y los precios por hora. Además, AlAngulo ofrece a los usuarios registrados la capacidad de realizar reservas en línea, gestionar sus reservas existentes y recibir notificaciones sobre promociones y ofertas especiales.

### Funcionalidades principales

+ **Búsqueda de canchas**: Los usuarios pueden buscar canchas de fútbol por ubicación, fecha y hora para encontrar la opción más adecuada para sus necesidades.
+ **Reservas en línea**: Los usuarios registrados pueden reservar canchas de fútbol de manera fácil y rápida a través de la plataforma.
+ **Gestión de reservas**: Los usuarios pueden ver sus reservas existentes, y tienen la posibilidad de cancelar reservas según sea necesario.
+ **Información detallada de la cancha**: Los usuarios pueden ver información detallada sobre cada cancha, incluidas las instalaciones, los horarios de disponibilidad y los precios.

## Tecnologías utilizadas

+ **Frontend**: La interfaz de usuario de AlAngulo está construida utilizando tecnologías web modernas como React.js para la creación de componentes interactivos y dinámicos, React Router para la navegación entre páginas, y Bootstrap para el diseño responsivo y la interfaz de usuario amigable.
+ **Backend**: El backend de la aplicación está desarrollado con Node.js y Express.js para crear una API RESTful que gestiona las solicitudes de los clientes, la autenticación de usuarios y la lógica de negocio relacionada con la gestión de reservas.
+ **Base de datos**: Se utiliza la base de datos MONGODB para almacenar la información de los usuarios, las reservas, los productos y los detalles de las canchas.
+ **Autenticación y autorización**: Se implementa un sistema de autenticación y autorización utilizando JSON Web Tokens (JWT) para garantizar que solo los usuarios registrados puedan realizar reservas y acceder a ciertas funcionalidades de la aplicación.

## Cómo utilizar AlAngulo

+ **Registro**: Crea una cuenta en AlAngulo proporcionando información básica como nombre, correo electrónico y contraseña.
+ **Inicio de sesión**: Inicia sesión en tu cuenta utilizando las credenciales registradas.
 
![Iniciar_Sesion](https://github.com/EzequielMassa/AlAnguloFrontend/assets/124631401/27bd95ff-588b-45dd-9bf6-67929a44fb0c)
+ **Buscar canchas**: Explora la lista de canchas disponibles y utiliza filtros para encontrar la opción que mejor se adapte a tus necesidades.
+ **Buscar Productos**: Explora nuestros Productos Personalizados y utilizar los filtros y categorias para encontrar aquel que buscas.
![Productos_Y_Canchas](https://github.com/EzequielMassa/AlAnguloFrontend/assets/124631401/cf58e0ee-97ef-4d81-91a8-18b4cf853494)

+ **Ver detalles**: Haz clic en una cancha para ver detalles completos como horarios de disponibilidad y precios, Productos y cantidad que desea ordenar, para luego agregar al carrito.
![Productos_ver](https://github.com/EzequielMassa/AlAnguloFrontend/assets/124631401/4a52a6de-f818-45d7-87ff-a0c0c3b8d02c)
![detalle_Producto](https://github.com/EzequielMassa/AlAnguloFrontend/assets/124631401/10a7a69b-df3e-481c-aab0-f6f5e6182171)

+ **Reserva**: Selecciona la fecha y hora deseadas y completa el proceso de reserva.
![canchas](https://github.com/EzequielMassa/AlAnguloFrontend/assets/124631401/afdb085d-952f-4a7a-b33c-e93f1f37a6a2)
![reserva](https://github.com/EzequielMassa/AlAnguloFrontend/assets/124631401/b4900c65-0c02-4bd9-b090-672263d91b6d)

+ **Gestión de reservas y Productos**: Accede a tu Carrito para ver y administrar tus reservas activas, así como para recibir notificaciones importantes.

![carrito](https://github.com/EzequielMassa/AlAnguloFrontend/assets/124631401/629b6c34-603b-493c-931d-a7570a8d2b50)

  

 	
## Guía de instalación

Para ejecutar el proyecto localmente en tu máquina, sigue estos pasos:

### Prerrequisitos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

+ Node.js (v20.x o superior)
+ npm (normalmente se instala junto con Node.js)
+ MongoDB

### Pasos de Instalación
Desde la consola 

+ Clona el repositorio:

  git clone https://github.com/EzequielMassa/AlAnguloFrontend.git

+ Accede al directorio del proyecto:

  cd AlAnguloFrontend

+ Instala las dependencias

  npm install

+ Configura variables de entorno:

  Copia el archivo .env.example y renómbralo a .env. Luego, actualiza las variables de entorno según tu configuración.

+ Inicia el servidor de desarrollo

  npm run dev

+Accede a la aplicación:

 Abre tu navegador web y visita http://localhost:5173 para ver la aplicación en funcionamiento.

## Autores

+ [Ezequiel Massa](https://github.com/EzequielMassa)
+ [Facundo Gimenez](https://github.com/facundoit)
+ [Tomas Williams](https://github.com/willytucuman)
+ [Federico Frau](https://github.com/FedericoFrau)


