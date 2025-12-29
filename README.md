
# 7k HSC

7k HSC is an offline-first Maharashtra HSC (Class 12) board-prep web app with preloaded chapter content and built-in study tools (flashcards, MCQs, reels/quick facts, long answers, progress tracking, planner, etc.).

## Tech

- React + TypeScript + Vite
- Preloaded syllabus/content in `data/*.ts` and wired via `constants.ts`
- Local persistence via `localStorage` (see `services/localDb.ts` and `hooks/useProgress.ts`)
- Optional AI tutor via Google Gemini (see `services/geminiService.ts`)

## Run locally

Prereqs:
- Node.js (recommended: Node 20.19+ / 22.12+ due to Vite tooling requirements)

```powershell
Set-Location "c:\Users\chhed\Desktop\7k hsc\7k-HSC"
npm ci
npm run dev
```

Vite dev server runs on `http://localhost:3000`.

## Build / preview

```powershell
Set-Location "c:\Users\chhed\Desktop\7k hsc\7k-HSC"
npm run build
npm run preview
```

## Gemini AI (optional)

Create a `.env` file in the repo root:

```
GEMINI_API_KEY=your_key_here
```

The app will work without an API key, but the AI tutor will show an “unavailable” message.

## Project map

- UI entry: `index.html`, `index.tsx`, `App.tsx`
- Study tool components: `components/`
- Content: `data/` and `constants.ts`
- Local storage services: `services/localDb.ts`
- Progress/streak tracking: `hooks/useProgress.ts`
- Planning docs: `plan/`
