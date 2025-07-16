# DoggiePoo2

This project is built with Vite and React.

## Changing the Web Icon

You can customize the site's favicon by setting the `VITE_SITE_ICON` environment variable to the path of your preferred icon.

Example `.env`:

```
VITE_SITE_ICON=/custom-icon.svg
```

When running `vite` or building the project, this value will be used to set the favicon. If `VITE_SITE_ICON` is not provided, the default `vite.svg` icon will be used.

