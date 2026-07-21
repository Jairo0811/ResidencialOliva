

<p align="center">
  <img src="./EdificiosOlivaFrontend/public/images/logo-residencial-oliva.png" alt="Logo de Edificios Oliva" width="320" />
</p>

<p align="center">
  <strong>Plataforma Full Stack para alquiler y administración de apartamentos vacacionales</strong><br>
  <strong>Bávaro • Punta Cana • República Dominicana</strong>
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=angular,ts,html,css,bootstrap,dotnet,cs,mssql,firebase,visualstudio,vscode,git,github,npm&perline=7" alt="Tecnologías utilizadas" />
</p>

---

# 📖 Descripción

**Edificios Oliva** es una plataforma web Full Stack orientada a la promoción, alquiler y administración de apartamentos turísticos ubicados en **Bávaro, Punta Cana, República Dominicana**.

El sistema combina un sitio web público para visitantes con un panel administrativo privado desde el cual se gestionarán apartamentos, imágenes, amenidades, clientes, reservas, pagos, disponibilidad, reportes y contenido general.

La solución está siendo reconstruida con una arquitectura moderna basada en **Angular 21**, **ASP.NET Core Web API sobre .NET 10**, **Entity Framework Core**, **SQL Server** y **Firebase Authentication**.

El objetivo es evolucionar el proyecto hasta convertirlo en una aplicación profesional, mantenible, escalable y preparada para producción.

---

# ✨ Funcionalidades actuales

## 🌐 Sitio web público

- ✅ Landing page moderna.
- ✅ Hero principal con diseño turístico.
- ✅ Navegación responsive.
- ✅ Catálogo visual de apartamentos.
- ✅ Vista de detalle de apartamentos.
- ✅ Galería fotográfica.
- ✅ Página de contacto.
- ✅ Información institucional.
- ✅ Integración de ubicación y mapas.
- ✅ Animaciones mediante AOS.
- ✅ Carruseles y contenido visual con Swiper.
- ✅ Diseño adaptable a escritorio, tablet y móvil.

## 🔐 Autenticación

- ✅ Inicio de sesión con correo y contraseña.
- ✅ Inicio de sesión con Google.
- ✅ Firebase Authentication.
- ✅ Protección de rutas mediante Guards.
- ✅ Perfiles de usuario.
- ✅ Roles administrativos.
- ✅ Menú de usuario autenticado.
- ✅ Cierre de sesión.

## 🖥️ Panel administrativo

- ✅ Layout administrativo independiente.
- ✅ Sidebar de navegación.
- ✅ Dashboard administrativo moderno.
- ✅ Vista administrativa de apartamentos.
- ✅ Formularios para creación y edición.
- ✅ Selección y previsualización de imágenes.
- ✅ Ordenamiento visual de imágenes.
- ✅ Gestión visual de amenidades.
- ✅ Estados de apartamento.
- 🚧 Persistencia definitiva mediante la API REST.
- 🚧 Datos dinámicos del dashboard.

## ⚙️ Backend

- ✅ ASP.NET Core Web API sobre .NET 10.
- ✅ Clean Architecture.
- ✅ Separación en capas `Api`, `Application`, `Domain` e `Infrastructure`.
- ✅ Entity Framework Core 10.
- ✅ SQL Server.
- ✅ Base de datos `EdificiosOlivaDb`.
- ✅ Migración inicial.
- ✅ OpenAPI.
- ✅ Entidades iniciales del dominio.
- ✅ Configuraciones Fluent API.
- ✅ Relaciones entre apartamentos, imágenes y amenidades.
- 🚧 CRUD REST de apartamentos.
- 🚧 Validación de tokens de Firebase en la API.

---

# 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| Angular 21 | Frontend SPA |
| TypeScript 5.9 | Lógica del cliente |
| HTML5 | Estructura semántica |
| CSS3 | Diseño y responsive |
| Bootstrap 5 | Componentes e interfaz |
| Angular Material / CDK | Componentes y utilidades UI |
| AOS | Animaciones al desplazarse |
| Swiper | Carruseles y galerías |
| Leaflet | Mapas |
| Firebase Authentication | Autenticación e inicio con Google |
| ASP.NET Core Web API | Backend REST |
| .NET 10 | Plataforma del backend |
| C# | Lógica del servidor |
| Entity Framework Core 10 | ORM y migraciones |
| SQL Server | Persistencia principal |
| OpenAPI | Documentación de la API |
| npm | Gestión de dependencias frontend |
| Git y GitHub | Control de versiones y repositorio |
| GitHub Actions | Integración continua |

---

# 🏗️ Arquitectura general

```text
                         Usuarios
                            │
                            ▼
                      Angular 21 SPA
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
 Firebase Authentication        ASP.NET Core Web API
                                          │
                                          ▼
                                  Application Layer
                                          │
                                          ▼
                                    Domain Layer
                                          │
                                          ▼
                                Infrastructure Layer
                                          │
                                          ▼
                                   SQL Server Database
```

Firebase permanece como proveedor de identidad. Los datos del negocio se almacenarán en SQL Server y serán administrados exclusivamente mediante la API REST.

---

# 🧱 Clean Architecture del backend

```text
EdificiosOliva.Api
├── Controllers
├── Configurations
├── Extensions
├── Filters
├── Middlewares
└── Program.cs

EdificiosOliva.Application
├── Common
├── DTOs
├── Features
├── Interfaces
├── Mappings
├── Services
└── Validators

EdificiosOliva.Domain
├── Common
├── Entities
├── Enums
├── Exceptions
├── Interfaces
└── ValueObjects

EdificiosOliva.Infrastructure
├── Identity
├── Persistence
│   ├── Configurations
│   ├── Context
│   ├── Migrations
│   └── Seed
├── Repositories
├── Services
└── Storage
```

## Entidades implementadas

```text
Apartment
ApartmentImage
Amenity
ApartmentAmenity
ApartmentStatus
BaseEntity
```

---

# 📂 Estructura del repositorio

```text
EdificiosOliva
│
├── EdificiosOlivaFrontend
│   ├── public
│   ├── src
│   │   ├── app
│   │   │   ├── core
│   │   │   ├── layouts
│   │   │   ├── pages
│   │   │   └── shared
│   │   └── environments
│   ├── angular.json
│   └── package.json
│
├── EdificiosOlivaBackend
│   ├── EdificiosOliva.Api
│   ├── EdificiosOliva.Application
│   ├── EdificiosOliva.Domain
│   ├── EdificiosOliva.Infrastructure
│   └── EdificiosOliva.slnx
│
├── .github
│   └── workflows
│
└── README.md
```

---

# 🚀 Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/Jairo0811/EdificiosOliva.git
cd EdificiosOliva
```

## 2. Ejecutar el frontend

```bash
cd EdificiosOlivaFrontend
npm install --legacy-peer-deps
npm start
```

La aplicación estará disponible en:

```text
http://localhost:4200
```

> `--legacy-peer-deps` es temporal mientras se completa la migración de AngularFire al SDK modular de Firebase compatible con Angular 21.

## 3. Ejecutar el backend

```bash
cd EdificiosOlivaBackend
dotnet restore
dotnet ef database update --project EdificiosOliva.Infrastructure --startup-project EdificiosOliva.Api
dotnet run --project EdificiosOliva.Api
```

La URL HTTPS se obtiene desde `EdificiosOliva.Api/Properties/launchSettings.json`.

## 4. Requisitos

- Node.js compatible con Angular 21.
- npm 11 o superior.
- Angular CLI 21.
- .NET SDK 10.
- SQL Server o SQL Server LocalDB.
- Visual Studio 2026 o Visual Studio Code.
- Proyecto configurado en Firebase Authentication.

---

# 🗄️ Base de datos

La base de datos principal es:

```text
EdificiosOlivaDb
```

Tablas iniciales:

```text
Apartments
ApartmentImages
Amenities
ApartmentAmenities
__EFMigrationsHistory
```

Los modelos actuales permiten:

- Registrar apartamentos.
- Asociar múltiples imágenes.
- Seleccionar una imagen de portada.
- Ordenar imágenes.
- Registrar amenidades.
- Asociar amenidades mediante una relación muchos a muchos.
- Manejar estados de disponibilidad, ocupación y mantenimiento.
- Aplicar eliminación lógica y auditoría básica mediante `BaseEntity`.

---

# 📊 Estado del proyecto

| Módulo | Estado |
|---|:---:|
| 🏠 Landing page | ✅ |
| 📱 Responsive design | ✅ |
| 🏢 Catálogo de apartamentos | ✅ |
| 📷 Galería pública | ✅ |
| 📍 Mapas y ubicación | ✅ |
| 📞 Contacto visual | ✅ |
| 🔐 Firebase Authentication | ✅ |
| 🔑 Inicio con Google | ✅ |
| 🛡️ Guards y roles | ✅ |
| 🖥️ Panel administrativo | ✅ |
| 🏛️ Clean Architecture | ✅ |
| ⚙️ ASP.NET Core Web API | ✅ |
| 🗄️ SQL Server | ✅ |
| 🧩 Entity Framework Core | ✅ |
| 🧱 Migración inicial | ✅ |
| 🏢 CRUD API de apartamentos | 🚧 |
| 🔗 Integración Angular ↔ API | 🚧 |
| 🖼️ Almacenamiento definitivo de imágenes | 🚧 |
| 👥 Gestión de clientes | ⏳ |
| 📅 Reservas y disponibilidad | ⏳ |
| 💳 Gestión de pagos | ⏳ |
| 📊 Dashboard dinámico | ⏳ |
| 📈 Reportes y estadísticas | ⏳ |
| 🔔 Notificaciones | ⏳ |
| 🧪 Testing automatizado | ⏳ |
| 🚀 Despliegue en producción | ⏳ |

Leyenda:

- ✅ Completado.
- 🚧 En desarrollo inmediato.
- ⏳ Planificado.

---

# 🗺️ Roadmap

## ✅ Etapa 1 — Experiencia visual y autenticación

- Reconstrucción del frontend con Angular moderno.
- Landing page.
- Responsive design.
- Navegación pública.
- Firebase Authentication.
- Inicio por correo y Google.
- Guards y roles.
- Panel administrativo.
- Interfaz del módulo de apartamentos.

## ✅ Etapa 2 — Backend y persistencia

- ASP.NET Core Web API.
- .NET 10.
- Clean Architecture.
- Entity Framework Core.
- SQL Server.
- Migración inicial.
- Entidades de apartamentos, imágenes y amenidades.
- OpenAPI.

## 🚧 Etapa 3 — Integración Full Stack

- Completar CRUD REST de apartamentos.
- Crear DTOs, validaciones, servicios y repositorios.
- Conectar Angular mediante `HttpClient`.
- Sustituir Firestore para los datos del negocio.
- Validar tokens de Firebase en ASP.NET Core.
- Sincronizar perfiles, roles y permisos con SQL Server.
- Implementar interceptores HTTP.
- Implementar manejo global de errores.

## 🚧 Etapa 4 — Imágenes y contenido

- Migrar Firebase Storage.
- Implementar proveedor de almacenamiento desacoplado.
- Subida segura de imágenes mediante la API.
- Imagen de portada.
- Ordenamiento de galería.
- Eliminación y optimización de archivos.
- Galería administrativa.

## ⏳ Etapa 5 — Operación del negocio

- Clientes.
- Reservas.
- Disponibilidad por fechas.
- Prevención de reservas cruzadas.
- Check-in y check-out.
- Estados de reserva.
- Pagos parciales y completos.
- Balance pendiente.
- Comprobantes.

## ⏳ Etapa 6 — Inteligencia administrativa

- Dashboard dinámico.
- Ocupación por apartamento.
- Ingresos por período.
- Próximas entradas y salidas.
- Reportes PDF y Excel.
- Auditoría.
- Notificaciones.
- Registro de actividad.

## ⏳ Etapa 7 — Calidad y producción

- Pruebas unitarias.
- Pruebas de integración.
- Pruebas end-to-end.
- CI/CD para Angular y .NET.
- Seguridad, CORS y rate limiting.
- Variables de entorno y secretos.
- Optimización SEO.
- Accesibilidad.
- Docker.
- Publicación del frontend, API y base de datos.

---

# 🎯 Próximo objetivo

El siguiente entregable técnico es completar el módulo de apartamentos de extremo a extremo:

```text
Angular Admin
      │
      ▼
ASP.NET Core API
      │
      ▼
Application Services
      │
      ▼
Entity Framework Core
      │
      ▼
EdificiosOlivaDb
```

Este módulo incluirá:

- CRUD completo.
- DTOs de entrada y salida.
- Validaciones.
- Búsqueda, filtros y paginación.
- Amenidades.
- Imágenes.
- Eliminación lógica.
- Respuestas HTTP consistentes.
- Manejo global de excepciones.
- Integración con el panel administrativo de Angular.

---

# 👨‍💻 Autor

**Francis Jairo Matías Rosario**

Tecnólogo en Desarrollo de Software  
Estudiante de Ingeniería de Software

---

<p align="center">
  Desarrollado con ❤️ utilizando Angular, ASP.NET Core, Entity Framework Core, SQL Server y Firebase Authentication.
</p>

<p align="center">
  <strong>Edificios Oliva • 2019 — Presente</strong>
</p>
