# 🏠🏝️ Edificios Oliva 🫒🏡

<p align="center">
  <img src="https://skillicons.dev/icons?i=angular,ts,html,css,bootstrap,dotnet,cs,firebase,visualstudio,vscode,git,github,npm&perline=7" />
</p>

<p align="center">
  <strong>Plataforma web para alquiler y administración de apartamentos vacacionales</strong><br>
  <strong>Bávaro • Punta Cana • República Dominicana</strong>
</p>

---

# 📖 Descripción

**Edificios Oliva** es una plataforma web desarrollada para la promoción, administración y gestión de apartamentos vacacionales ubicados en **Bávaro, Punta Cana, República Dominicana**.

La plataforma está compuesta por un sitio web público y un panel administrativo que permiten administrar apartamentos, imágenes, reservas, clientes y pagos desde una única aplicación.

El proyecto nació originalmente en **2019** bajo el nombre **Residencial Oliva**, convirtiéndose en uno de los primeros desarrollos personales del autor utilizando Angular.

En **2026** comenzó una reconstrucción completa utilizando una arquitectura moderna basada en **Angular**, **ASP.NET Core Web API**, **Entity Framework Core**, **SQL Server** y **Firebase Authentication**, preservando la versión original como **Legacy Version**.

---

# ✨ Características

## 🌐 Sitio Web

- ✅ Landing Page moderna
- ✅ Responsive Design
- ✅ Catálogo de apartamentos
- ✅ Galería fotográfica
- ✅ Información de contacto
- ✅ Google Maps
- ✅ Animaciones
- 🚧 Sistema de reservas
- 🚧 Disponibilidad en tiempo real

---

## 🔐 Panel Administrativo

- ✅ Inicio de sesión con correo y contraseña
- ✅ Inicio de sesión con Google
- ✅ Firebase Authentication
- ✅ Roles de usuario
- ✅ Dashboard moderno
- 🚧 Gestión de apartamentos
- 🚧 Gestión de imágenes
- 🚧 Gestión de reservas
- 🚧 Gestión de clientes
- 🚧 Gestión de pagos
- 🚧 Reportes
- 🚧 Estadísticas

---

# 🛠️ Tecnologías

<p align="center">
  <img src="https://skillicons.dev/icons?i=angular,ts,html,css,bootstrap,dotnet,cs,mssql,firebase,visualstudio,vscode,git,github,npm" />
</p>

| Tecnología | Uso |
|------------|----------------------------|
| Angular 20 | Frontend |
| TypeScript | Lógica del cliente |
| HTML5 | Estructura |
| CSS3 | Diseño |
| Bootstrap | Componentes UI |
| ASP.NET Core Web API | Backend |
| C# | Lógica del servidor |
| Entity Framework Core | ORM |
| SQL Server | Base de datos |
| Firebase Authentication | Autenticación |
| Google Identity | Inicio de sesión con Google |
| Git | Control de versiones |
| GitHub | Repositorio |

---

# 🏗️ Arquitectura General

```text
                    Angular 20
                         │
                         ▼
             ASP.NET Core Web API
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
   Application Layer           Infrastructure Layer
          │                             │
          └──────────────┬──────────────┘
                         ▼
                  SQL Server Database
```

---

# 🔐 Autenticación

La autenticación del sistema es gestionada mediante **Firebase Authentication**, mientras que toda la información del negocio se almacena en **SQL Server**.

```text
Usuario
    │
    ▼
Firebase Authentication
    │
    ▼
JWT Token
    │
    ▼
ASP.NET Core Web API
    │
    ▼
SQL Server
```

---

# 📂 Estructura del Proyecto

```text
ResidencialOliva
│
├── ResidencialOliva/              → Frontend Angular
│
└── EdificiosOliva/                → Backend .NET
    │
    ├── EdificiosOliva.Api
    ├── EdificiosOliva.Application
    ├── EdificiosOliva.Domain
    └── EdificiosOliva.Infrastructure
```

---

# 🧱 Arquitectura del Backend (Clean Architecture)

El backend sigue los principios de **Clean Architecture**, separando completamente las responsabilidades del sistema.

```text
EdificiosOliva.Api
│
├── Controllers
├── Configurations
├── Extensions
├── Filters
├── Middlewares
└── Program.cs

EdificiosOliva.Application
│
├── DTOs
├── Interfaces
├── Services
├── Features
└── Validators

EdificiosOliva.Domain
│
├── Entities
├── Enums
├── ValueObjects
├── Interfaces
└── Common

EdificiosOliva.Infrastructure
│
├── Persistence
│   ├── Context
│   ├── Configurations
│   ├── Migrations
│   └── Repositories
│
└── Services
```

---

# 📂 Arquitectura del Frontend

```text
src
│
├── app
│   ├── core
│   ├── layouts
│   ├── pages
│   └── shared
│
├── public
│
└── environments
```

---

# 🚀 Instalación

## Clonar el repositorio

```bash
git clone https://github.com/Jairo0811/ResidencialOliva.git
```

---

## Frontend

```bash
cd ResidencialOliva

npm install

ng serve
```

La aplicación estará disponible en:

```
http://localhost:4200
```

---

## Backend

```bash
cd EdificiosOliva

dotnet restore

dotnet ef database update

dotnet run --project EdificiosOliva.Api
```

La API estará disponible en:

```
https://localhost:7238
```

---

# 📊 Estado del Proyecto

| Módulo | Estado |
|-------------------------------|:------:|
| 🏠 Landing Page | ✅ |
| 📱 Responsive Design | ✅ |
| 🔐 Firebase Authentication | ✅ |
| 🔑 Login con Google | ✅ |
| 🖥️ Dashboard Administrativo | ✅ |
| ⚙️ Backend ASP.NET Core | ✅ |
| 🗄️ SQL Server | ✅ |
| 🧩 Entity Framework Core | ✅ |
| 🏛️ Clean Architecture | ✅ |
| 🏢 CRUD Apartamentos | 🚧 |
| 🖼️ Gestión de Imágenes | 🚧 |
| 👥 Gestión de Clientes | 🚧 |
| 📅 Gestión de Reservas | 🚧 |
| 💳 Gestión de Pagos | 🚧 |
| 📊 Dashboard Dinámico | 🚧 |
| 📈 Reportes | 🚧 |

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
- Clean Architecture
- API REST
- CRUD Apartamentos
- Gestión de imágenes

---

## 🚀 Tercera Etapa

- Gestión de reservas
- Gestión de clientes
- Gestión de pagos
- Dashboard dinámico
- Reportes
- Estadísticas
- Auditoría
- Notificaciones
- Disponibilidad en tiempo real

---

# 💡 Historia del Proyecto

**Edificios Oliva** comenzó en **2019** como un proyecto personal para promocionar apartamentos familiares ubicados en **Bávaro, Punta Cana, República Dominicana**.

En **2026**, el proyecto fue reconstruido completamente desde cero, evolucionando hacia una plataforma Full Stack para la administración integral de apartamentos vacacionales.

Actualmente utiliza una arquitectura moderna basada en **Angular**, **ASP.NET Core Web API**, **Entity Framework Core**, **SQL Server** y **Firebase Authentication**, implementando principios como **Clean Architecture**, separación de responsabilidades, escalabilidad y buenas prácticas de desarrollo.

El proyecto original permanece disponible como **Legacy Version**, mientras que esta nueva edición representa la evolución profesional de **Edificios Oliva**, concebida como una plataforma moderna, escalable y preparada para producción.

---

# 👨‍💻 Autor

**Francis Jairo Matías Rosario**

Tecnólogo en Desarrollo de Software

Estudiante de Ingeniería de Software

---

<p align="center">

Desarrollado con ❤️ utilizando Angular, ASP.NET Core, Entity Framework Core, SQL Server y Firebase Authentication.

**Edificios Oliva • 2019 — Presente**

</p>
