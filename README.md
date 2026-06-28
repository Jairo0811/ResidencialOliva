# 🏠🏝️ Edificios Oliva 🫒🏡

<p align="center">
  <img src="https://skillicons.dev/icons?i=angular,ts,html,css,bootstrap,firebase&perline=6" />
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=vscode,git,github,npm&perline=4" />
</p>

<p align="center">

# Plataforma web para alquiler de apartamentos vacacionales

**Bávaro • Punta Cana • República Dominicana**

Desarrollado con Angular + Firebase

</p>

---

# 📖 Descripción

**Edificios Oliva** es una plataforma web desarrollada para la promoción y administración de apartamentos vacacionales ubicados en **Bávaro, Punta Cana**.

El objetivo del proyecto es ofrecer una experiencia moderna tanto para los visitantes como para los administradores, permitiendo consultar apartamentos, realizar reservas y administrar toda la información desde un panel privado.

El proyecto nació originalmente en **2019** bajo el nombre **Residencial Oliva**, como uno de los primeros desarrollos personales del autor utilizando Angular.

En **2026** comenzó una reconstrucción completa utilizando Angular moderno, Firebase y una arquitectura totalmente renovada, preservando el proyecto original como versión **Legacy**.

---

# ✨ Características

## 🌐 Sitio Web

* ✅ Landing Page moderna
* ✅ Hero principal
* ✅ Responsive Design
* ✅ Navegación optimizada
* ✅ Sección de apartamentos
* ✅ Galería fotográfica
* ✅ Información de contacto
* ✅ Google Maps
* ✅ Animaciones suaves
* ✅ Diseño moderno

---

## 🔐 Panel Administrativo

* ✅ Inicio de sesión con correo y contraseña
* ✅ Inicio de sesión con Google
* ✅ Firebase Authentication
* ✅ Cloud Firestore
* ✅ Gestión de perfiles
* ✅ Roles de usuario
* ✅ Dashboard administrativo moderno
* 🔄 Gestión de apartamentos
* 🔄 Gestión de reservas
* 🔄 Gestión de clientes
* 🔄 Gestión de pagos

---

# 🛠️ Tecnologías

<p align="center">

<img src="https://skillicons.dev/icons?i=angular,ts,html,css,bootstrap,firebase,vscode,git,github,npm" />

</p>

| Tecnología              | Uso                  |
| ----------------------- | -------------------- |
| Angular                 | Frontend             |
| TypeScript              | Lógica               |
| HTML5                   | Estructura           |
| CSS3                    | Diseño               |
| Bootstrap               | Componentes UI       |
| Firebase Authentication | Autenticación        |
| Cloud Firestore         | Base de datos        |
| Google Maps             | Ubicación            |
| Git                     | Control de versiones |
| GitHub                  | Repositorio          |

---

# 🔐 Autenticación

El sistema utiliza **Firebase Authentication** como proveedor principal de autenticación.

Actualmente soporta:

* Inicio de sesión mediante correo y contraseña.
* Inicio de sesión mediante Google.
* Gestión de perfiles en Cloud Firestore.
* Protección del panel administrativo mediante Auth Guards.
* Roles de administrador.

---

# 📂 Arquitectura

```text
src
│
├── app
│   ├── core
│   │   ├── guards
│   │   ├── models
│   │   └── services
│   │       ├── auth.service.ts
│   │       ├── apartment.service.ts
│   │       ├── reservation.service.ts
│   │       └── firebase.service.ts
│   │
│   ├── pages
│   │   ├── home
│   │   ├── apartments
│   │   ├── apartment-detail
│   │   ├── gallery
│   │   ├── contact
│   │   ├── login
│   │   └── admin
│   │
│   └── shared
│       ├── navbar
│       ├── footer
│       └── components
│
├── public
│   └── images
│
├── environments
│
└── README.md
```

---

# 🚀 Instalación

## Clonar el repositorio

```bash
git clone https://github.com/Jairo0811/ResidencialOliva.git
```

Entrar al proyecto

```bash
cd ResidencialOliva
```

Instalar dependencias

```bash
npm install
```

Ejecutar

```bash
ng serve -o
```

Abrir

```
http://localhost:4200
```

---

# 📊 Estado del Proyecto

| Módulo                      | Estado |
| --------------------------- | :----: |
| 🏠 Landing Page             |    ✅   |
| 🏢 Apartamentos             |   🚧   |
| 📷 Galería                  |   🚧   |
| 📍 Google Maps              |    ✅   |
| 📞 Contacto                 |   🚧   |
| 🔐 Login por Correo         |    ✅   |
| 🔑 Login con Google         |    ✅   |
| 🔥 Firebase Authentication  |    ✅   |
| ☁️ Cloud Firestore          |    ✅   |
| 👤 Dashboard Administrativo |    ✅   |
| 📱 Responsive Design        |   🚧   |

---

# 🗺️ Roadmap

## ✅ Primera Etapa (Completada)

* Nueva arquitectura
* Angular moderno
* Nuevo diseño
* Responsive
* Home
* Navbar
* Footer
* Firebase Authentication
* Cloud Firestore
* Login por correo
* Login con Google
* Dashboard Administrativo

---

## 🚧 Segunda Etapa

* Catálogo de apartamentos
* Detalle del apartamento
* Galería
* Contacto
* Integración completa con Google Maps
* Optimización SEO

---

## 🚀 Tercera Etapa

* Gestión de apartamentos
* Gestión de reservas
* Gestión de clientes
* Gestión de pagos
* Dashboard dinámico
* Reportes
* Estadísticas
* Panel completo de administración

---



# 💡 Historia del Proyecto

Este proyecto comenzó en **2019** con el objetivo de crear una página web para promocionar unos apartamentos familiares ubicados en **Bávaro, Punta Cana, República Dominicana**, ofreciendo a los visitantes una forma sencilla de conocer las instalaciones, explorar los apartamentos disponibles, consultar información relevante y facilitar el contacto para futuras reservas.

Aunque nunca llegó a implementarse oficialmente, el desarrollo permitió experimentar con **Angular**, **Firebase** y diversas tecnologías web modernas, convirtiéndose en uno de los primeros proyectos personales del autor y en una pieza importante dentro de su crecimiento profesional como desarrollador de software.

En **2026**, el proyecto fue reconstruido completamente desde cero, manteniendo la esencia de la idea original, pero incorporando una arquitectura moderna, un diseño totalmente renovado, una mejor experiencia de usuario y tecnologías actuales como **Angular 20**, **Firebase Authentication** y **Cloud Firestore**.

Esta nueva versión tiene como objetivo evolucionar hacia una plataforma integral para la gestión de apartamentos vacacionales, permitiendo administrar reservas, clientes, apartamentos, pagos y contenido mediante un panel administrativo seguro, escalable y preparado para futuras funcionalidades.

El proyecto original permanecerá disponible como **Legacy Version**, mientras que esta edición representa la evolución definitiva de **Edificios Oliva**, reflejando la experiencia, las buenas prácticas y los conocimientos adquiridos por el autor a lo largo de los años.


---

# 👨‍💻 Autor

**Francis Jairo Matías Rosario**

Tecnólogo en Desarrollo de Software

Estudiante de Ingenieria de Software

---

<p align="center">

Desarrollado con ❤️ utilizando Angular & Firebase

**Edificios Oliva • 2019 — Presente**

</p>

