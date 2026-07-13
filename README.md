# 🏠🏝️ Edificios Oliva 🫒🏡

<p align="center">
  <img src="https://skillicons.dev/icons?i=angular,ts,html,css,bootstrap,dotnet,cs,firebase&perline=9" />
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=visualstudio,vscode,git,github,npm&perline=5" />
</p>

<p align="center">
  <strong>Plataforma web para alquiler y administración de apartamentos vacacionales</strong><br>
  <strong>Bávaro • Punta Cana • República Dominicana</strong>
</p>

---

# 📖 Descripción

**Edificios Oliva** es una plataforma web desarrollada para la promoción, administración y gestión de apartamentos vacacionales ubicados en **Bávaro, Punta Cana, República Dominicana**.

El sistema ofrece una experiencia moderna tanto para visitantes como para administradores, permitiendo consultar apartamentos, administrar reservas, clientes, pagos y toda la información del negocio mediante un panel administrativo seguro.

El proyecto nació originalmente en **2019** bajo el nombre **Residencial Oliva**, convirtiéndose en uno de los primeros desarrollos personales del autor utilizando Angular.

En **2026** comenzó una reconstrucción completa utilizando una arquitectura Full Stack basada en **Angular**, **ASP.NET Core Web API**, **SQL Server** y **Firebase Authentication**, preservando la versión original como **Legacy Version**.

---

# ✨ Características

## 🌐 Sitio Web

- ✅ Landing Page moderna
- ✅ Hero principal
- ✅ Responsive Design
- ✅ Catálogo de apartamentos
- ✅ Galería fotográfica
- ✅ Información de contacto
- ✅ Google Maps
- ✅ Animaciones
- ✅ Diseño moderno
- 🚧 Sistema de reservas

---

## 🔐 Panel Administrativo

- ✅ Inicio de sesión con correo y contraseña
- ✅ Inicio de sesión con Google
- ✅ Firebase Authentication
- ✅ Dashboard moderno
- ✅ Roles de usuario
- 🚧 Gestión de apartamentos
- 🚧 Gestión de imágenes
- 🚧 Gestión de reservas
- 🚧 Gestión de clientes
- 🚧 Gestión de pagos
- 🚧 Reportes

---

# 🛠️ Tecnologías

<p align="center">

<img src="https://skillicons.dev/icons?i=angular,ts,html,css,bootstrap,dotnet,cs,firebase,visualstudio,vscode,git,github,npm" />

</p>

| Tecnología | Uso |
|------------|----------------------------|
| Angular | Frontend |
| TypeScript | Lógica del cliente |
| HTML5 | Estructura |
| CSS3 | Diseño |
| Bootstrap | Componentes UI |
| ASP.NET Core Web API | Backend |
| C# | Lógica del servidor |
| Entity Framework Core | ORM |
| SQL Server | Base de datos |
| Firebase Authentication | Autenticación |
| Google Maps | Ubicación |
| Git | Control de versiones |
| GitHub | Repositorio |

---

# 🏗️ Arquitectura

```text
Angular
        │
        ▼
ASP.NET Core Web API
        │
        ▼
Application Layer
        │
        ▼
Infrastructure Layer
        │
        ▼
SQL Server
```

Autenticación:

```text
Usuario
      │
      ▼
Firebase Authentication
      │
      ▼
ASP.NET Core API
      │
      ▼
SQL Server
```

---

# 📂 Arquitectura del Backend

```text
EdificiosOliva
│
├── EdificiosOliva.Api
├── EdificiosOliva.Application
├── EdificiosOliva.Domain
└── EdificiosOliva.Infrastructure
```

---

# 📂 Arquitectura del Frontend

```text
src
│
├── app
│   ├── core
│   ├── pages
│   ├── shared
│   └── layouts
│
├── public
│
└── environments
```

---

# 🚀 Instalación

## Clonar el proyecto

```bash
git clone https://github.com/Jairo0811/ResidencialOliva.git
```

Frontend

```bash
cd ResidencialOliva
npm install
ng serve
```

Backend

```bash
cd EdificiosOliva
dotnet restore
dotnet run --project EdificiosOliva.Api
```

---

# 📊 Estado del Proyecto

| Módulo | Estado |
|-------------------------------|:------:|
| Landing Page | ✅ |
| Responsive Design | ✅ |
| Firebase Authentication | ✅ |
| Login con Google | ✅ |
| Dashboard Administrativo | ✅ |
| Backend ASP.NET Core | ✅ |
| SQL Server | ✅ |
| Entity Framework Core | ✅ |
| CRUD Apartamentos | 🚧 |
| Gestión de Imágenes | 🚧 |
| Gestión de Clientes | 🚧 |
| Gestión de Reservas | 🚧 |
| Gestión de Pagos | 🚧 |
| Dashboard Dinámico | 🚧 |
| Reportes | 🚧 |

---

# 🗺️ Roadmap

## ✅ Primera Etapa

- Nueva arquitectura Frontend
- Angular moderno
- Responsive Design
- Firebase Authentication
- Login por correo
- Login con Google
- Dashboard Administrativo

---

## 🚧 Segunda Etapa

- Backend ASP.NET Core
- SQL Server
- Entity Framework Core
- CRUD Apartamentos
- Gestión de imágenes
- API REST

---

## 🚀 Tercera Etapa

- Reservas
- Clientes
- Pagos
- Dashboard dinámico
- Reportes
- Estadísticas
- Auditoría
- Notificaciones

---

# 💡 Historia del Proyecto

**Edificios Oliva** comenzó en **2019** como un proyecto personal para promocionar apartamentos familiares ubicados en **Bávaro, Punta Cana**.

En **2026** el proyecto fue reconstruido completamente, evolucionando hacia una plataforma Full Stack para la administración integral de apartamentos vacacionales.

Actualmente utiliza una arquitectura basada en **Angular**, **ASP.NET Core Web API**, **Entity Framework Core**, **SQL Server** y **Firebase Authentication**, siguiendo principios de **Clean Architecture**, separación de responsabilidades y buenas prácticas de desarrollo.

El proyecto original permanecerá disponible como **Legacy Version**, mientras que esta nueva edición representa la evolución definitiva de **Edificios Oliva**, concebida como una aplicación escalable, moderna y preparada para producción.

---

# 👨‍💻 Autor

**Francis Jairo Matías Rosario**

Tecnólogo en Desarrollo de Software

Estudiante de Ingeniería de Software

---

<p align="center">

Desarrollado con ❤️ utilizando Angular, ASP.NET Core y SQL Server.

<b>Edificios Oliva • 2019 — Presente</b>

</p>
