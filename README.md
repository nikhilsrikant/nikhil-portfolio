# Nikhil portfolio starter (static site)

This is a lightweight, responsive portfolio website designed for deployment on **Vercel via GitHub**.

## What is included

- Dark / light mode toggle
- Responsive layout for desktop and mobile
- Clickable project list with dedicated detail pages
- Clickable experience list with dedicated detail pages
- Publications section with a Springer paper page
- About section
- Contact section with email, phone, LinkedIn, GitHub, and a quick email form
- Resume files included in `assets/resume/`

## Project structure

- `index.html` → homepage
- `projects/index.html` → projects list
- `projects/*/index.html` → project detail pages
- `experience/index.html` → experience list
- `experience/*/index.html` → experience detail pages
- `publications/index.html` → publications list
- `publications/*/index.html` → publication detail page
- `assets/styles.css` → all styling
- `assets/script.js` → theme toggle, mobile menu, reveal animations, contact form helper

## Run locally

From the project folder:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000` in your browser.

## Push to GitHub with plain Git

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Deploy to Vercel

1. Sign in to Vercel.
2. Import the GitHub repository.
3. Use the **Other** preset for a plain static site.
4. Leave build, install, and output settings empty.
5. Deploy.

## Fast edits you will probably make

- Update text in `index.html`
- Edit project detail pages in `projects/*/index.html`
- Edit experience detail pages in `experience/*/index.html`
- Update the publication page in `publications/*/index.html`
- Adjust colors and spacing in `assets/styles.css`
- Replace the resume files in `assets/resume/`

## Note about your phone number

The current contact section includes your phone number because it appears on your resume. If you prefer not to publish it publicly, remove the `tel:` link from `index.html`.
