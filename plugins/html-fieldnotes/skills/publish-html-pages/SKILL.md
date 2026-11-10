---
name: publish-html-pages
description: Add or update static HTML pages in an HTML Fieldnotes fork and verify their GitHub Pages URLs.
---

# Publish HTML Pages

Identify the user's fork from its Git remote and verify its URL in **Settings → Pages**. The expected source is `main` → `/ (root)`.

1. Start from the latest `main`. Put pages in a root-level topic folder such as `design-docs/` or `demos/`. Use a unique lowercase filename, or a folder with `index.html` for a page with its own assets.
2. Write page copy in English, use relative links, and keep private data out of public files. Preview the page. Keep it plain HTML so Pages copies it as-is and the homepage lists it automatically.
3. When asked to publish, commit only the intended files and push to the fork's `main`. Verify the homepage entry and the live page, then share its URL. For example, `demos/report/index.html` is served at `<pages-url>/demos/report/`. Check **Actions** if deployment is pending.
