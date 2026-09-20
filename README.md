# QS360KE

Atelier QS quantity surveying portfolio, learning resources, and API.

## Run From The Repository Root

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

The combined application runs at `http://localhost:4000`:

- Frontend pages are served from `frontend/public`.
- API endpoints are available under `/api`.
- The root page is the frontend home page.

Use `npm start` for a normal production-style start, `npm run check` for syntax checks, and `npm run format` to format frontend and backend source files.

## Project Structure

```text
qs360ke/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── modules/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── frontend/
│   └── public/
├── .env.example
├── package.json
└── package-lock.json
```

## API Endpoints

- `GET /api/health` - API health check
- `GET /api/content` - all portfolio, journal, course, template, and service data
- `GET /api/content/projects?category=commercial` - filtered projects
- `GET /api/content/projects/:id` - one project
- `GET /api/content/journal` - journal posts
- `GET /api/content/courses` - online courses
- `GET /api/content/templates` - quantity surveying templates
- `GET /api/content/services` - services offered
- `POST /api/contact/inquiries` - submit a project inquiry
- `POST /api/contact/newsletter` - subscribe to occasional notes

POST requests use `Content-Type: application/json`.

Example inquiry:

```json
{
  "name": "Amina Client",
  "email": "client@example.com",
  "projectType": "Commercial fit-out",
  "message": "I would like to discuss cost planning for a new project."
}
```

Contact records currently use an in-memory store so the application can run immediately. Replace `backend/config/database.js` with a persistent database adapter when storage requirements are finalized.
