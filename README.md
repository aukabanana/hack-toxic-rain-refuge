# Toxic Rain Refuge

Toxic Rain Refuge is a full-stack survival coordination web application for an apocalypse scenario involving toxic rain and contaminated areas.

The application helps survivors manage limited resources, identify safe and toxic zones, coordinate communities, and assign missions based on shortages and nearby threats.

---

## Main Features

### 1. Survival Resource Tracker

Track essential survival resources within a community.

Examples:

* Food
* Water
* Medicine
* Fuel
* Tools
* Equipment

Users can add, update, and delete resource records to monitor whether supplies are sufficient for the number of survivors.

### 2. Toxic Zone Map

Display safe zones, toxic zones, resource locations, and mission destinations on a map.

The map uses:

* OpenStreetMap
* Leaflet
* React Leaflet

### 3. Mission Assignment and Recommendation

Create and assign missions to survivors.

Mission priority may depend on:

* Resource shortages
* Nearby toxic zones
* Risk level
* Distance to resource locations
* Mission urgency
* Available community members

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Axios
* React Router
* Framer Motion
* Lucide React
* Leaflet
* React Leaflet
* OpenStreetMap

## Backend

* Express
* TypeScript
* Prisma ORM
* SQLite / libSQL
* Zod
* Cookie Parser
* CORS
* Morgan
* dotenv
* Multer

## Database

* Prisma ORM
* SQLite for local development
* `@prisma/adapter-libsql`

---

# Project Structure

```txt
toxic-rain-refuge/
├── frontend/
├── backend/
└── README.md
```

---

# Getting Started

## Requirements

Install these tools before starting:

* Node.js
* npm
* Git

Check whether Node.js and npm are available:

```bash
node -v
npm -v
```

---

# Installation

Clone the repository:

```bash
git clone <REPOSITORY_URL>
cd toxic-rain-refuge
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install backend dependencies:

```bash
cd ../backend
npm install
```

---

# Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=3000
DATABASE_URL="file:./dev.db"
```

Do not commit `.env` files to Git.

---

# Running the Project

Open two terminals.

## Terminal 1: Frontend

```bash
cd frontend
npm run dev
```

Frontend URL:

```txt
http://localhost:5173
```

## Terminal 2: Backend

```bash
cd backend
npm run dev
```

Backend URL:

```txt
http://localhost:3000
```

Test backend connection:

```txt
http://localhost:3000
```

Expected response:

```txt
Connected, Welcome to BackEnd jaaaa 👾👾
```

---

# Frontend Structure

```txt
frontend/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── types/
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── apis/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── routers/
│   │   │   └── types/
│   │   │
│   │   ├── dashboard/
│   │   ├── communities/
│   │   ├── resources/
│   │   ├── map/
│   │   ├── missions/
│   │   └── notifications/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
└── vite.config.ts
```

Each module should contain these subfolders:

```txt
module-name/
├── apis/
├── components/
├── pages/
├── routers/
└── types/
```

## Frontend Folder Responsibilities

| Folder            | Purpose                                     |
| ----------------- | ------------------------------------------- |
| `src/api/`        | Shared Axios instance and API configuration |
| `src/components/` | Reusable shared components                  |
| `src/hooks/`      | Shared custom hooks                         |
| `src/lib/`        | Utility functions and constants             |
| `src/routes/`     | Main application routes                     |
| `src/types/`      | Shared TypeScript types                     |
| `src/modules/`    | Feature-specific code                       |

Example resource module:

```txt
src/modules/resources/
├── apis/
│   └── resourceApi.ts
├── components/
│   ├── ResourceCard.tsx
│   ├── ResourceTable.tsx
│   └── ResourceFormModal.tsx
├── pages/
│   └── ResourcesPage.tsx
├── routers/
│   └── resourceRouter.tsx
└── types/
    └── resource.ts
```

---

# Backend Structure

```txt
backend/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── generated/
│   │   └── prisma/
│   │
│   ├── lib/
│   │   └── prisma.ts
│   │
│   ├── middlewares/
│   ├── routes/
│   ├── schemas/
│   ├── types/
│   │
│   ├── modules/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── communities/
│   │   ├── resources/
│   │   ├── map/
│   │   ├── missions/
│   │   └── notifications/
│   │
│   └── index.ts
│
├── uploads/
├── .env
├── .gitignore
├── package.json
├── prisma.config.ts
└── tsconfig.json
```

Each backend module should contain:

```txt
module-name/
├── controllers/
├── routers/
├── schemas/
├── services/
└── types/
```

## Backend Folder Responsibilities

| Folder              | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `controllers/`      | Handle request and response logic        |
| `routers/`          | Define API endpoints                     |
| `services/`         | Store business logic and Prisma queries  |
| `schemas/`          | Store Zod validation schemas             |
| `types/`            | Store module-specific TypeScript types   |
| `src/lib/prisma.ts` | Export the shared Prisma client instance |

---

# Prisma Setup

The backend uses Prisma with `@prisma/adapter-libsql`.

Prisma client configuration:

```ts
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing");
}

const adapter = new PrismaLibSql({
  url: connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

export default prisma;
```

---

# Prisma Workflow

After pulling changes that modify `prisma/schema.prisma`, run:

```bash
cd backend
npx prisma generate
```

If a new migration exists, run:

```bash
npx prisma migrate dev
```

When creating a new schema change:

```bash
npx prisma migrate dev --name <MIGRATION_NAME>
npx prisma generate
```

Example:

```bash
npx prisma migrate dev --name add-resource-table
npx prisma generate
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

# Development Rules

## General Rules

* Do not rewrite unrelated files.
* Keep changes small and focused.
* Preserve the existing folder structure.
* Use clear naming conventions.
* Use strict TypeScript types.
* Avoid using `any`.
* Reuse existing components before creating new ones.
* Do not add new libraries unless necessary.

## Frontend Rules

* Use Axios for all frontend API requests.
* Do not replace Axios with `fetch`.
* Keep API functions inside each module's `apis/` folder.
* Keep page components inside `pages/`.
* Keep reusable UI components inside `components/`.
* Define API response types inside `types/`.
* Handle loading, error, and empty states.

Example API function:

```ts
import axios from "axios";
import type { GetResourcesResponse, Resource } from "../types/resource";

export async function getResources(): Promise<Resource[]> {
  const response = await axios.get<GetResourcesResponse>("/api/resources");
  return response.data.data;
}
```

## Backend Rules

* Use Prisma for database access.
* Use Zod for request validation.
* Controllers should handle HTTP request and response logic.
* Services should handle business logic.
* Routers should define endpoints only.
* Do not expose raw server errors.
* Return consistent API response shapes.

Recommended success response:

```ts
return res.status(200).json({
  success: true,
  data,
  message: "Resources fetched successfully",
});
```

Recommended error response:

```ts
return res.status(500).json({
  success: false,
  message: "Something went wrong",
});
```

---

# Suggested API Endpoints

## Authentication

```txt
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
```

## Communities

```txt
GET    /api/communities
POST   /api/communities
GET    /api/communities/:id
PATCH  /api/communities/:id
DELETE /api/communities/:id
POST   /api/communities/:id/join
POST   /api/communities/:id/members
DELETE /api/communities/:id/members/:memberId
```

## Resources

```txt
GET    /api/resources
POST   /api/resources
PATCH  /api/resources/:id
DELETE /api/resources/:id
```

## Map

```txt
GET    /api/map/zones
POST   /api/map/zones
PATCH  /api/map/zones/:id
DELETE /api/map/zones/:id

GET    /api/map/markers
POST   /api/map/markers
PATCH  /api/map/markers/:id
DELETE /api/map/markers/:id
```

## Missions

```txt
GET    /api/missions
POST   /api/missions
PATCH  /api/missions/:id
DELETE /api/missions/:id
POST   /api/missions/recommendations
```

---

# Map Requirements

The Toxic Zone Map uses OpenStreetMap with Leaflet and React Leaflet.

Always keep OpenStreetMap attribution visible.

Suggested map layers:

* Safe zones
* Toxic zones
* Warning zones
* Resource points
* Mission destinations
* Community bases

Do not rely only on marker colors. Use labels, popups, legends, and risk-level text.

---

# Git Workflow

Before starting a new task:

```bash
git checkout main
git pull origin main
git checkout -b <BRANCH_NAME>
```

Example:

```bash
git checkout -b feature/resource-tracker
```

After completing the task:

```bash
git status
git add <FILES>
git commit -m "<COMMIT_MESSAGE>"
git push origin <BRANCH_NAME>
```

Example:

```bash
git add src/modules/resources
git commit -m "Add resource tracker module structure"
git push origin feature/resource-tracker
```

Create a Pull Request and ask another teammate to review the changes before merging.

---

# Commit Message Examples

```txt
feat: add resource creation form
feat: add toxic zone map markers
fix: correct resource quantity validation
refactor: separate mission service logic
docs: update backend setup instructions
chore: install lucide react icons
```

---

# Before Pushing Code

Check these items:

* The project runs without errors.
* TypeScript does not show unresolved errors.
* New API requests use Axios.
* New backend inputs are validated with Zod.
* Prisma schema changes include migrations.
* `.env` files are not committed.
* No unrelated files were modified.
* New components are stored in the correct module.
* OpenStreetMap attribution remains visible.

---

# Current Setup Status

The initial project structure has been created.

Completed setup:

* Frontend initialized with React, TypeScript, and Vite
* Backend initialized with Express and TypeScript
* CORS configured for `http://localhost:5173`
* Cookie Parser installed
* Morgan request logger installed
* dotenv configured
* Prisma configured with `@prisma/adapter-libsql`
* Lucide React installed for frontend icons
* Feature-based module folders prepared

Next development tasks:

1. Finalize Prisma schema
2. Run the first Prisma migration
3. Create shared Axios instance
4. Configure React Router
5. Implement authentication
6. Implement community management
7. Implement resource tracker
8. Implement Toxic Zone Map
9. Implement mission assignment and recommendation

---

# Notes

This project is intended for a hackathon. Prioritize functional, understandable, and presentation-ready features.

Avoid overengineering. Focus on the core survival workflow:

```txt
Create or join a community
        ↓
Track available resources
        ↓
Identify shortages
        ↓
Review safe and toxic zones
        ↓
Create or recommend missions
        ↓
Assign missions to survivors
```
