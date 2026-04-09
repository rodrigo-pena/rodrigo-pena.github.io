# Documentation

Code for generating my [personal website][personal-website]. The generated website is intended to be hosted with [GitHub Pages][github-pages].

## Local development

1. Install [Node.js](https://nodejs.org/) 20 or newer.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:4321` in your browser.

## Build for production

```bash
npm run build
```

The built site is generated in `dist/`.

## Deploy to GitHub Pages

Deployment is handled by GitHub Actions via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

1. Push to `main` (or `master`).
2. In the GitHub repository settings, set **Pages** to deploy from **GitHub Actions**.

## Content and customization

- Edit site-wide metadata in `src/site.config.ts`.
- Edit homepage content in `src/pages/index.md`.
- Edit styles in `src/styles/main.scss`.
- Static assets are served from `public/`.

## How to use this repository as a template for your website

1. [Fork][fork] this repository.
2. Rename the repository you just forked to `YOUR-USER.github.io`, where `YOUR-USER` is your GitHub username.
3. Clone your renamed repository.
4. Run `npm install` and `npm run dev`.
5. Edit `src/site.config.ts` and `src/pages/index.md` with your personal information.

## Acknowledgements

I started building the layout of this website by modifying the [compass] template.

## License

The content is released under the terms of the [MIT License](LICENSE.txt).

[compass]: https://github.com/excentris/compass
[fork]: https://github.com/rodrigo-pena/rodrigo-pena.github.io/fork
[github-pages]: https://pages.github.com/
[personal-website]: https://rodrigo-pena.github.io/
