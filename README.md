# LessHomeless — Coming Soon

A standalone HTML, CSS, and JavaScript Coming Soon website. This is the marketing page only; it is not the LessHomeless application.

## Included
- LessHomeless purple-and-teal visual identity
- Coming Soon message and short mission statement
- Responsive desktop and mobile layout
- iPhone-style app concept preview
- Light/dark website theme toggle
- **Opposite-theme behavior:** when the website is light, the phone preview is dark; when the website is dark, the phone preview is light
- Theme preference saved in local storage
- Email signup presentation (front-end only)

## Run locally
Open `index.html` in a browser. No build step or package installation is required.

For local development, you can also run a simple static server from this folder:
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Before publishing
The email form is a visual front-end placeholder. Connect it to an email-list provider or a secure serverless endpoint before collecting real addresses. Do not collect or store email addresses in browser-only JavaScript.

## Cloudflare Pages
For a plain static site:
- Framework preset: None
- Build command: leave blank
- Build output directory: `/` (or the project root, depending on the deployment method)
- No Node.js build is required.

Keep the marketing site separate from the LessHomeless application repository.
