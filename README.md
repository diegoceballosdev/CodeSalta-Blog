# 🚀 CodeSalta

**CodeSalta** es una aplicación web desarrollada con **Next.js 16** y **React 19**, diseñada para ofrecer una experiencia de lectura fluida, rápida y moderna.

El proyecto se integra con un **Headless CMS (Strapi)** para la gestión dinámica de contenidos y sirve como guía práctica para aprender:

- Arquitectura moderna con App Router
- Renderizado del lado del servidor (SSR)
- Integración con CMS
- Diseño UI profesional con Tailwind CSS v4
- Buenas prácticas con TypeScript

---

## 🌟 Características Principales

- 🏗️ **Arquitectura App Router**  
  Implementación basada en las últimas capacidades de Next.js.

- 🎨 **Diseño Moderno y Responsivo**  
  Interfaz estilizada con Tailwind CSS v4, adaptable a cualquier dispositivo.

- 📰 **Gestión de Contenidos con Strapi**  
  Integración completa para:
  - Posts
  - Categorías
  - Autores

- 📝 **Renderizado Markdown**  
  Soporte avanzado para contenido enriquecido usando:
  - `react-markdown`
  - Plugins de `rehype` y `remark`

- 🧩 **Componentes Modulares y Reutilizables**  
  Sistema organizado de componentes como:
  - Hero
  - Featured
  - Newsletter
  - Cards de Posts
  - Layouts reutilizables

- 🔒 **TypeScript**  
  Tipado estático para mayor robustez y mantenibilidad.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología      | Descripción                       |
| --------------- | --------------------------------- |
| **Framework**   | Next.js 16                        |
| **Librería UI** | React 19                          |
| **Lenguaje**    | TypeScript                        |
| **Estilos**     | Tailwind CSS v4                   |
| **CMS**         | Strapi                            |
| **Utilidades**  | react-icons, clsx, tailwind-merge |

---

## 🚀 Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

---

### 1. Configuración del Backend (Strapi)

El frontend requiere de una instancia de Strapi para obtener los datos.

1. **Inicia tu proyecto Strapi** (si lo tienes en un repositorio separado, clónalo e instala sus dependencias con `npm install`).
2. **Ejecuta el servidor de desarrollo** de Strapi:
   ```bash
   npm run develop
   ```
3. **Estructura de Contenido**: Asegúrate de tener creados los siguientes Collection Types en tu panel de Strapi (http://localhost:1337/admin):

- Post (Título, Slug, Descripcion, Contenido, Cover Image, Destacado, Vistas, Tiempo de Lectura, Categoría, etc.)
- Category (Nombre, Slug, Cover Image, Posts, etc.)

4. **Permisos de la API**: ve a Settings -> API Tokens y genera un token de acceso para usarlo en el frontend.

---

### 2. Instalación y Configuración del Frontend (Next.js)

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

#### 2.1 Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd blog-frontend
```

#### 2.2 Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

#### 2.3 Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables (asegúrate de tener tu instancia de Strapi corriendo):

```env
NEXT_PUBLIC_STRAPI_URL='http://localhost:1337'
STRAPI_API_TOKEN="tu_token_de_strapi_aqui"
```

#### 2.4 Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

Desarrollado con ❤️ para demostrar capacidades de diseño y desarrollo web moderno.
