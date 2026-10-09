# Phrasal Verbs

A mobile-first app to learn English phrasal verbs: browse them, search them, listen to them and practice with flashcards and quizzes. It works offline and can be installed on your phone.

## Why this exists

I was studying English with a notebook full of handwritten phrasal verbs, and honestly, memorizing them from there was a chore. Flipping through pages, squinting at my own handwriting, never finding the one I wanted... I got lazy about it. So instead of re-reading my notes, I built an app that does the boring part for me.

## Features

- **Browse** the full list of phrasal verbs, each with its meaning and an example sentence. Tap a card to open it.
- **Search** by title, and optionally also by meaning and examples.
- **A–Z index** to jump straight to the verbs that start with a letter.
- **Favorites** with a star on each card, plus a filter to see only the ones you saved.
- **Listen** to a verb and its example read aloud.
- **Study mode**
  - **Flashcards:** flip each card and mark it as "Got it" or "Again". The ones you miss come back later in the session.
  - **Quiz:** multiple choice. You get the verb and its example sentence, and pick the right meaning from four options.
  - Study all verbs or only your favorites, in sessions of 10, 20, 30 or 50.
- **Offline and installable:** a service worker caches the whole app, so it opens without a connection and can be added to your home screen.

## Tech stack

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) 5
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) (Workbox) for the service worker and web manifest
- Plain CSS with design tokens, no UI framework
- No backend: everything runs in the browser

## Getting started

You need [Node.js](https://nodejs.org/) and npm.

```bash
npm install
npm run dev
```

Then open the URL that Vite prints (usually `http://localhost:5173`).

### Scripts

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload              |
| `npm run build`   | Create the production build in `dist/`            |
| `npm run preview` | Serve the production build locally                |
| `npm run lint`    | Run ESLint                                        |

The service worker is only generated for the production build. To try offline mode locally, run `npm run build && npm run preview`, load the page once, then switch the browser to offline in DevTools (Application → Service Workers) and reload.

## Project structure

```
src/
  components/        UI components (cards, search, letter index, view switch)
    study/           Flashcards, quiz and study setup
  data/              The phrasal verb list
  hooks/             useFavorites (localStorage) and useSpeech (Web Speech API)
  styles/            Design tokens (colors and shadows)
  utils/             Filtering, sorting, shuffling and quiz generation
public/              Favicon and app icons
```

## Adding or editing verbs

All the content lives in `src/data/phrasalVerbs.js`. Each entry looks like this:

```js
{
  id: 'break-down',
  title: 'break down',
  meaning: 'stop functioning (vehicle, machine)',
  example: 'Our car broke down at the side of the highway in the snowstorm.',
},
```

- `id` must be unique and should not change once it exists, because favorites are stored by id.
- When the same phrasal verb has several meanings, add one entry per meaning and give each a different id (for example `break-down` and `break-down-2`).

## Notes

- **Favorites** are saved in your browser's `localStorage`, so they live on that device and browser only. They are not synced between devices.
- **Audio** uses the browser's built-in speech synthesis. How it sounds, and whether it works offline, depends on the English voices installed on your device.

## Deployment

It is a static site, so it can be deployed anywhere that serves static files. I host it on [Vercel](https://vercel.com/). The service worker needs HTTPS, which Vercel provides by default.
