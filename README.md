# GitHub Repo Viewer

The app has been deployed to https://www.githubviewer.kyle65463.com/.

The app uses react, typescript, nextjs, and tailwindcss & sass for styling.

## Commands

### Run dev server on localhost

```
npm run dev
```

### Build

```
npm run build
```

### Serve

```
npm run start
```

## Code structure

The app uses client side rendering. There are custom hooks for each page to fetch data from external API, returning the data, is the data still loading, or the request has any errors. They divide the logic from the view of the app.

### pages/

Each file corresponds to a route, parsing url parameters and pass them to page component in `modules/<page_name>/<page_name>.tsx`. File names follow the rules of [nextjs](https://nextjs.org/docs/basic-features/pages).

### common/

Reusable codes for different modules.

### modules/

Different modules of the application, such as pages and navbar. Each subdirectory contains components, stylesheets and hooks for the module.

### services/

Functions that connect external API, i.e. GitHub. They fetch the data and catch errors if any.
