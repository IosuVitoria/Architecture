**Nivel 0 — Fundamentos (40–60 h)**

*Objetivo: dominar React moderno y mejores prácticas básicas antes de entrar en arquitectura.*

Proyectos:
- Todo App (SPA) — 20–30 h
- Aprender JSX, componentes funcionales, hooks (useState, useEffect, useRef).
- Estructura de carpetas simple (/components, /pages, /services).
- Persistencia local (localStorage).
- Tests unitarios básicos con Jest + React Testing Library.

Tareas concretas:

- Diseñar componentes reutilizables (TodoItem, TodoList, Input).
- Añadir pruebas: render, eventos, y snapshot.
- Refactor: extraer hooks personalizados (useTodos).
- Counter con Context y Reducer — 8–12 h
- Practicar useReducer, Context API.
- Patrón actions/reducer (preludio a Redux).
- Pruebas para reducer puros.
- Conceptos explicados:
- Component vs Container.
- Unidirectional data flow.
- Test first thinking (pruebas unitarias vs integración).
- Principio de responsabilidad única en componentes.


Nivel 1 — Organización del código y patrones (50–80 h)

Objetivo: aprender a organizar una app React para escalabilidad.

Proyectos:

Blog con rutas y carga remota — 25–35 h

Router (React Router), lazy loading, code splitting, Suspense.

Implementar services/api y abstracción de fetch (fetch + cache simple).

Estructura en features (feature folders): /features/posts, /features/auth.

Tests: mocks con MSW (Mock Service Worker).

Design System pequeño — 25–35 h

Componentes atómicos (Button, Input, Card) y tokens (colores, tipografía).

Documentación con Storybook.

Publicar librería local (npm pack / monorepo).

Conceptos explicados:

Feature folder vs Layered folder.

Code splitting, lazy loading y rendimiento.

Component library y reutilización.

Aislamiento de dependencias.

Nivel 2 — Estado global y arquitectura del dominio (60–90 h)

Objetivo: dominar patrones de estado y separar UI de dominio.

Proyectos:

E-commerce catálogo (single page) — 30–40 h

Estado global: comparar Context+useReducer, Redux Toolkit, Zustand o Jotai.

Normalizar estado (entities), selectors.

Implementar un carrito con persistencia y reglas de negocio en fuera del UI (servicio/domain).

Tests: unitarios + tests de integración UI.

App con Clean Architecture — “Bookings” — 30–50 h

Implementar una pequeña app donde la lógica de negocio está en módulos independientes (domain/usecases/gateways).

Interfaz (React) llama a usecases; usecases dependen de interfaces (puertos); infra (API) implementa adaptadores.

Esqueleto de arquitectura hexagonal aplicada al frontend (o en un pequeño backend simulado).

Conceptos explicados:

Clean Architecture / Hexagonal / Ports & Adapters: separar domain (core) de infra.

Boundaries: por qué mover lógica a servicios independientes mejora testabilidad.

Normalización del estado y cache.

Nivel 3 — Arquitectura a nivel de aplicación y escalabilidad (100–140 h)

Objetivo: diseñar apps complejas, modularizar y preparar para equipo.

Proyectos:

Plataforma Multi-página con SSR/SSG — 40–60 h

Usar Next.js (o Remix) para SSR/SSG.

Rutas anidadas, carga inicial optimizada.

Datos en el servidor vs en cliente; estrategia de caché (stale-while-revalidate).

Pruebas end-to-end parciales.

Micro-frontend simple (shell + 2 microapps) — 30–50 h

Implementar una shell y 2 micro-frontends (por ejemplo, catálogo + carrito).

Técnicas: module federation (Webpack), IFrames o composición con web components.

Deploy independiente de microapps.

API Gateway + Backend simulado (Node/Express o serverless) — 30–40 h

Diseñar contratos (OpenAPI), versionado de API.

Autenticación (JWT), autorización a nivel de rutas.

Estrategias de error handling y retries.

Conceptos explicados:

SSR/SSG y tradeoffs.

Micro-frontends: cuándo y por qué; costos (build, integración).

API contract first, versionado y compatibilidad hacia atrás.

Nivel 4 — Arquitectura distribuida y patrones avanzados (100–140 h)

Objetivo: dominar microservicios, event-driven, CQRS y comunicaciones.

Proyectos:

SaaS minimal: Orders + Payments (microservices) — 60–80 h

Frontend React + backend compuesto por 2 servicios (Orders, Payments).

Comunicación: REST + events (RabbitMQ / Kafka simulado).

Implementar CQRS: separar lectura/escritura (read models).

Deploy en contenedores (Docker Compose) y pruebas de integración.

Realtime Dashboard (WebSockets / GraphQL Subscriptions) — 40–60 h

Diseño de streams de datos, backpressure.

Visualización reactiva (charts) y handling de reconexiones.

Observabilidad: métricas esenciales en el servidor y el frontend (latency).

Conceptos explicados:

Microservices vs Modular Monolith.

Event-driven architecture: beneficios y complejidad (eventual consistency).

CQRS y Event Sourcing (conceptual, con ejemplo simple).

Consistencia, idempotency, compensating transactions.

Nivel 5 — Calidad, seguridad, CI/CD y observabilidad (60–80 h)

Objetivo: profesionalizar pipelines, pruebas y monitoreo.

Proyectos / Tareas:

Pipeline CI/CD — 20–30 h

GitHub Actions o GitLab CI: lint → tests → build → deploy.

Canary deploy / feature flags demo (simulación).

Artefactos y caches.

Testing a nivel de sistema — 20–25 h

E2E con Cypress; contract tests (Pact) entre frontend y backend.

Performance tests ligeros (Lighthouse CI).

Observabilidad y seguridad — 20–25 h

Logs estructurados (JSON), traces (OpenTelemetry) y dashboard básico (Grafana/Prometheus simulado).

Revisión de seguridad: OWASP for SPA, CSP, XSS, CSRF y token handling.

Conceptos explicados:

Shift-left testing, contract testing.

Monitoreo: métricas, logs, tracing y alerting.

Seguridad en frontends: almacenamiento seguro de tokens, SameSite cookies, CORS.

Nivel 6 — Escenarios reales y capstone (50–100 h)

Objetivo: integrar todo en un proyecto final que muestre arquitectura holística.

Proyecto final (capstone): Marketplace completo (monorepo) — 50–100 h

Monorepo (pnpm/yarn workspaces): packages/web, packages/auth, packages/orders, packages/ui.

Frontend con micro-frontends o módulos independientes.

Backend mínimo con microservicios (o serverless functions).

Infra: Docker, IaC básico (Terraform o templates), despliegue en cloud (Vercel + AWS/GCP demo).

Observabilidad, CI/CD, feature flags, tests de contrato, documentación y diagramas arquitectónicos.

Entregable final: repositorio con README técnico (diagramas, decisiones, tradeoffs), despliegue funcional y video/demo.

Conceptos explicados:

Trade-offs en decisiones arquitectónicas.

Diseño para mantenimiento y equipo.

Cómo presentar decisiones arquitectónicas (ADR — Architecture Decision Records).