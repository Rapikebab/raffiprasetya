# Rapikebab.github.io

Personal portfolio of Raffi Prasetya Ramadhani. Plain HTML, CSS, and JavaScript. No build step.

Live: https://rapikebab.github.io

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Publish to GitHub Pages

1. Create a public repository named exactly `Rapikebab.github.io` (must match your GitHub username).
2. Push this folder:

   ```bash
   git remote add origin https://github.com/Rapikebab/Rapikebab.github.io.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. Wait a minute, then open https://rapikebab.github.io

## Edit content

- English text lives in `index.html`.
- Indonesian text lives in the `ID` object at the top of `script.js`. Keys match the `data-i18n` attributes in the HTML.
- Colors and fonts are tokens at the top of `style.css`.
