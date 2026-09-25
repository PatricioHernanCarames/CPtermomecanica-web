# cptermomecanica-web

Sitio publico inicial de C.P. Termomecanica. Es una landing page estatica, liviana y preparada para publicarse con GitHub Pages.

## Estructura

```text
cptermomecanica-web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── config.js
│   └── app.js
├── assets/
│   ├── img/
│   │   └── hero-hvac-iot.png
│   └── logo/
│       └── cptermomecanica-mark.svg
└── README.md
```

## Ejecutar localmente

Al ser un sitio estatico, puede abrirse directamente desde `index.html`. Para probarlo con un servidor local:

```bash
python -m http.server 8080
```

Luego abrir:

```text
http://localhost:8080
```

Si se ejecuta desde la raiz del workspace, entrar primero a la carpeta:

```bash
cd cptermomecanica-web
python -m http.server 8080
```

## Configuracion de API

La URL publica de la API esta centralizada en `js/config.js`:

```js
const API_BASE_URL = "https://api.cptermomecanica.com";
```

El frontend solo puede consultar endpoints publicos, por ejemplo `/health`. No debe agregarse `x-api-token` ni ningun secreto en HTML, JavaScript, GitHub Pages o archivos publicos.

## Publicar con GitHub Pages

1. Crear un repositorio independiente para este frontend.
2. Subir el contenido de `cptermomecanica-web/`.
3. En GitHub, ir a `Settings > Pages`.
4. Seleccionar la rama principal y la carpeta raiz del repositorio.
5. Guardar la configuracion y esperar la URL generada por GitHub Pages.

El backend `aa-restart-api` debe permanecer en su propio proyecto o repositorio.

## Futuras rutas previstas

La landing deja preparado el concepto para sumar mas adelante:

```text
/clientes
/login
/dashboard
```

La autenticacion y la autorizacion por cliente deben resolverse en el backend. El frontend no debe decidir por si solo que equipos o dispositivos puede ver un usuario.
