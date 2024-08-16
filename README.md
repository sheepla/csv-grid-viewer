<div align="center">
  
# CSV Grid Viewer

</div>

**CSV Grid Viewer** is a simple Web-based CSV grid viewer, built with [React](https://react.dev), [MUI](https://mui.com), and [AG-Grid Community Edition](https://www.ag-grid.com/).

<div align="center" style="display: flex; align-items: center;">
  <img src="./screenshots/screenshot_light.png" width="40%">
  <img src="./screenshots/screenshot_dark.png" width="40%">
</div>

## Features

- [x] Allows to load local CSV file 📝
- [x] Sorting and filtering any columns ⏬
- [x] Supports dark mode 🌙

## Build

Running `yarn build`, the static web contents are emitted in the `build` directory.

```sh
yarn build
```

## Deploy

It is built as a typical static single-page application. 
It can be distributed using a web server such as Apache or Nginx or a tool such as [vercel/serve](https://github.com/vercel/serve).

```sh
npm install --global serve
serve --single build --listen 8080
```

## Author

[sheepla](https://github.com/sheepla)
