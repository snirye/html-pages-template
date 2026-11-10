# HTML Fieldnotes

HTML Fieldnotes is a starter repository for teams that want to publish standalone HTML pages and share them as public links. Fork it into your organization’s GitHub account and manage your content and GitHub Pages settings there. [Open the upstream demo gallery](https://snirye.github.io/html-pages-template/).

## Site layout

GitHub Pages serves the repository root. Jekyll builds the root `index.html` as an expandable folder browser. Each topic folder containing an HTML page appears automatically, and each page has its own URL. Ordinary HTML files are published as-is.

| Folder | Topic and example |
| --- | --- |
| `design-docs/` | [The Quiet Coast](https://snirye.github.io/html-pages-template/design-docs/quiet-coast/), an editorial design study in Design Documents |
| `demos/` | [Focus Room](https://snirye.github.io/html-pages-template/demos/focus-room/), an interactive focus timer in Website Demos |
| `assets/` | Shared site styles |

## Set up GitHub Pages

1. Fork this repository into your organization or personal account.
2. In your fork, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose `main` and `/ (root)`, then click **Save**. After deployment, click **Visit site** to get your fork’s URL.

If your fork publishes from `/docs`, switch its source to `/ (root)` after pulling the new layout.

## Publish an HTML page

1. Add the page in a root-level topic folder. For a page with its own assets, use a folder such as `demos/report/` with an `index.html`. Use relative links for the assets.
2. Commit to your fork’s `main` branch. After deployment, expand the topic folder in the homepage and verify the new link. For the report example, append `demos/report/` to your Pages URL. Publish only files you intend to make public.

## Install the publishing plugin

The plugin includes the [`publish-html-pages` skill](plugins/html-fieldnotes/skills/publish-html-pages/SKILL.md). Install it from the upstream marketplace, then use it from your fork’s checkout.

### Claude Code

```sh
claude plugin marketplace add snirye/html-pages-template
claude plugin install html-fieldnotes@fieldnotes
```

Start Claude Code in your fork and run `/html-fieldnotes:publish-html-pages`. [Claude Code plugin documentation](https://code.claude.com/docs/en/discover-plugins).

### Codex

```sh
codex plugin marketplace add snirye/html-pages-template
codex plugin add html-fieldnotes@fieldnotes
```

Start Codex in your fork and select `publish-html-pages` from `/skills`. [Codex plugin documentation](https://developers.openai.com/plugins/build/plugins).
