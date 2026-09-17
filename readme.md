# Hoja de vida personal

Pagina web desarrollada para presentar una hoja de vida profesional. El proyecto incluye una interfaz estática con información personal, formación académica, tecnologías, idiomas y datos de contacto, además de un formulario que registra usuarios en una base de datos SQLite.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- SQLite mediante `better-sqlite3`
- CORS
- Nodemon para desarrollo

## Requisitos

- Node.js instalado
- pnpm instalado

La versión recomendada del gestor de paquetes es pnpm 11 o superior.

## Instalación

Clona o descarga el proyecto y ejecuta en la raíz:

```bash
pnpm install
```

## Ejecución

Para iniciar el servidor en modo desarrollo:

```bash
pnpm dev
```

El backend quedará disponible en:

```text
http://localhost:2000
```

El archivo HTML se encuentra en `template-static/index.html`. Para que la interfaz pueda usar el formulario, el backend debe estar ejecutándose en el puerto `2000`, ya que el frontend envía las solicitudes a esa dirección.

## Funcionalidades

- Navegación interna entre las secciones de la hoja de vida.
- Presentación de perfil, educación, tecnologías, idiomas y contacto.
- Diseño responsive para dispositivos móviles.
- Formulario de contacto con validación básica del navegador.
- Registro de nombre, apellido y correo electrónico en SQLite.

## API

### Registrar usuario

**Endpoint:** `POST /api/usuario`

**Cuerpo de la solicitud:**

```json
{
	"name": "Santiago",
	"lastName": "Gonzaliaz Lucumi",
	"email": "santiago@example.com"
}
```

**Respuesta exitosa:** `201 Created`

```json
{
	"mensaje": "Usuario insertado correctamente"
}
```

Los registros se almacenan en la tabla `misUsuarios` de la base de datos `backend/usuarios.db`.

## Estructura del proyecto

```text
.
├── backend/
│   ├── server.js       # Servidor Express y endpoint de usuarios
│   └── usuarios.db     # Base de datos SQLite
├── static/
│   └── FOTO.jpg        # Imagen de perfil
├── template-static/
│   ├── index.html       # Interfaz de la hoja de vida
│   ├── script.js        # Envío del formulario al backend
│   └── style.css        # Estilos y diseño responsive
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

## Autor

**Santiago Gonzaliaz Lucumi**  
Universidad del Valle
