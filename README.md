# Southern Creative Concepts Website

This repository contains a business website for Southern Creative Concepts LLC, built with [Next.js](https://nextjs.org) using the App Router and Tailwind CSS. The site reflects the agency's full suite of digital services and includes these routes:

- `/` – Home page detailing mission, vision, and services
- `/about` – Business overview with mission and vision statements
- `/consultation` – Form for scheduling project consultations

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site. Changes in the `src/app` directory will hot-reload automatically.

## Project Structure

```
src/
  app/
    layout.tsx        # root layout with header/navigation
    page.tsx          # home
    about/page.tsx    # about page
    consultation/page.tsx # consultation form
    globals.css       # shared styles
```

Forms currently show a confirmation message on submit; integrate an API route or external service to process submissions.

## Tailwind & Styling

Tailwind CSS is configured by default via `tailwind.config.js` and `globals.css`.

## Deployment

Deploy easily using [Vercel](https://vercel.com) or another static hosting provider that supports Next.js.

Refer to the official [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for details.
