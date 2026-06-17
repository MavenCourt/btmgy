# Bethel Tabernacle Ministries Website

Official website project for Bethel Tabernacle Ministries, a Christian church ministry based at 74 Princess Street, Lodge, Georgetown, Guyana.

The site was originally started from a Lovable export, but the current project has been rebuilt as an editable Vite, React, TypeScript, and Tailwind CSS website.

## Website Structure

- Home
- About
- Leadership
- Ministries
- Service Times
- Events
- Sermons / Media
- Gallery
- Give
- Prayer Request
- Contact
- Plan Your Visit

## Editing Church Content

Most church-specific content is centralized here:

```text
src/data/church.ts
```

Edit that file to update:

- Church contact details
- Vision, mission, purpose, and history
- Leadership names and responsibilities
- Ministries and department leaders
- Service times
- Annual calendar focus
- Giving page wording
- Gallery collections

Page files live in:

```text
src/pages
```

Shared layout components live in:

```text
src/components
```

## Local Development

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

The site usually opens at:

```text
http://127.0.0.1:8080/
```

## Build

Create a production build:

```sh
npm run build
```

The built site is output to:

```text
dist
```

## Deployment

Recommended deployment options:

- Vercel
- Netlify
- Cloudflare Pages

Use these settings:

```text
Framework: Vite
Build command: npm run build
Output directory: dist
```

## Notes

- Forms currently open addressed email drafts, which keeps the Phase 1 site simple and static-host friendly.
- A future phase can add database-backed forms, member login, document center, event registration, and online giving integrations.
- Private church source documents and original ZIP exports should stay local unless leadership intentionally chooses to store them in a private repository.
