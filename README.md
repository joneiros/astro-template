# Setup and Run Commands
All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

# Behaviours
Some of these behaviours are native to Astro, others may be reminders to myself
of limitations caused by how I've built the project. They'll be loosely ordered
in terms of criticality.
Also check [Astro Documentation](https://docs.astro.build).

Behaviours:
- `<title>` and some meta tags may default to the Base if the page title
and filename differ, as the `frontmatter.title`
is currently being parsed to get the URL to inject into `Base.astro`
for blog posts
- Astro looks for `.astro` or `.md` files in the `src/pages/` directory.
Each page is exposed as a route based on its file name.
- Any static assets, like images, can be placed in the `public/` directory.

# Starting Environment
For Reference, this is where I started:
- Astro Starter Kit: Minimal