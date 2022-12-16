# ewahnish-ecommerce-project

## Descripción del Proyecto

El proyecto incluye el backend y frontend de una aplicación de e-commerce que vende productos de una ferretería industrial.

### Backend:

El backend está desarrollado con node js y se han utilizado las siguientes bibliotecas de node js:

-	bcrypt
-	connect-mongo
-	cookie-parser
-	cors
-	dotenv
-	express
-	express-handlebars
-	express-session
-	express-socket
-	express-socket.io-session
-	form-data
-	jsonwebtoken
-	mongoose
-	multer
-	nodemailer
-	passport
-	passport-jwt
-	passport-local
-	session
-	session-file-store
-	winston

Se han utilizado las siguientes variables de entorno:

#### .env.example
- NODE_ENV=development
- MODE=CLUSTER
- URL=Acá se coloca el enlace de acceso a Mongo DB
- SELECTED_DB=Acá se coloca la base de datos seleccionada, en nuestro caso MONGODB
- ADMIN_PWD=Acá se coloca la contraseña del administrador 
- ADMIN_EMAIL=Acá se coloca el email 
- SESSION_KEY=Acá se coloca el session secret 
- JWT_SECRET_KEY=Acá se coloca el JWT secret
- LOG_LEVEL=Acá se coloca el nivel de logging
- MAIL_AUTH_USER=Acá se coloca el email de autenticación de google
- MAIL_AUTH_PASS=Acá se coloca la contraseña de autorización google
- MAIL_FROM=Acá se coloca el email de fantasía con el que se envían los mails
- MAIL_TO=Acá se coloca el mail receptor de mensajes
- TIME_TO_LIVE=600Aca se coloca el tiempo de expiración de la sesión
- EXPIRATION_IN=Acá se coloca expiración de JWT token

Se han generado cinco grupos de rutas principales:

-	Grupo de rutas asociadas al manejo de carritos
-	Grupo de rutas asociadas al manejo de órdenes de compra
-	Grupo de rutas asociada al manejo productos
-	Grupo de rutas asociadas al manejo de sesiones
-	Grupo de rutas asociadas al manejo de vistas

El manejo de productos, carritos y ordenes se ha implementado mediante API RESTFUL con los verbos GET, POST, PUT y DELETE.
La arquitectura del servidor dispone de las capas de: ruteo, controlador, servicios, persistencia y base de datos.

**Importante:** El controlador de productos dispone de un chequeo en las rutas POST, y DELETE mediante el cual el único usuario que puede agregar o eliminar productos, es el usuario administrador. 
Se permite la actualización de producto por parte del usuario cuando el usuario genera la orden de compra, que actualizará el stock de los productos involucrados.

#### Estrategia de autenticación: 
La estrategia de autenticación se basa en la estrategia local de passport y passport-jwt. 
Cuando un usuario se registra, se le solicita que envíe email (email), password (password), password re tipeada (password2), nombre (name), teléfono (phone) y edad (age). Si bien el frontend valida que las dos contraseñas enviadas coincidan, el backend también valida este dato. Para almacenar las contraseñas de manera encriptada en la base de datos, se ha utilizado bcrypt.

#### Manejo de errores:
Para el logging de errores se ha utilizado ‘winston’. Los logs se almacenan en el servidor:
-	error.log para errores
-	warn.log para advertencias
-	info.log para información
El servidor se encuentra configurado en modo cluster e inicia tantos procesos de tipo “Worker” como el mínimo entre dos y el numero de procesadores disponibles. Se ha configurado que cuando un proceso “Worker” finaliza, el servidor arranque otro y loguee la finalización del “Worker” que falló. Esto protege al proceso de caídas, superando la limitación de node js de ser single thread.

#### Vistas especiales:
Se han generado tres vistas con información adicional, utilizando el motor de plantillas handlebars:
-	/server_check: verifica que el servidor se encuentre activo
-	/server_info: brinda información del sistema
-	/configuration_info: brinda información de la configuración del sistema

Las vistas estarán disponibles cuando el usuario se encuentre logueado. 
La vista /configuration_info solo está disponible para perfil administrador.

## Frontend:

Para el desarrollo del frontend se ha utilizado mayoritariamente javascript, y para las vistas especiales, el motor de plantillas handlebars.

La pantalla inicial es la pantalla de login, que solicita email y password.
En la barra de navegación puede encontrarse la opción para registrarse.

Mediante la barra de navegación también se puede acceder a los productos, carritos, etc necesarios para la gestión del e-commerce. 

Las vistas especiales no fueron incluidas en la barra de navegación:
 
-	/server_check: se accede colocando ‘/server_check’ a continuación de la url
-	/server_info: se accede colocando ‘/server_info’ a continuación de la url
-	/configuration_info: se accede colocando ‘/configuration_info’ a continuación de la url

**Listado de Productos**

Los productos se despliegan en la pantalla en forma de tarjetas. Los usuarios, al ingresar, verán tarjetas como la que se muestra a continuación, donde los botones se encuentran diseñados para efectuar la compra:

![image](https://user-images.githubusercontent.com/91384694/207990649-1544ce47-2ec9-4a45-b3c1-0bc472a57be0.png)

Cuando ingrese el administrador, el listado de productos se verá diferente, ya que los botones en este caso están diseñados para que el administrador pueda modificar y eliminar productos

![image](https://user-images.githubusercontent.com/91384694/207992492-e93cab73-40b3-4e41-8bde-bd5885f6c238.png)

**Proceso de compra:**

Para agregar un producto al carrito, se hace click en los botones ‘+’ y ‘-‘ hasta lograr la cantidad deseada y luego se hace click en ‘AGREGAR AL CARRITO’.

Una vez que se han incorporado al carrito los productos deseados, se pueden listar los mismos seleccionando la opción ‘LISTAR CARRITO’.

![image](https://user-images.githubusercontent.com/91384694/207993522-79f8a185-d5d3-476e-a6a9-33873bded7f2.png)






