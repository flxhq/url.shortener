# URL Shortener &middot; [![CodeQL](https://github.com/flxhq/url.shortener/actions/workflows/codeql.analysis.yml/badge.svg)](https://github.com/flxhq/url.shortener/actions/workflows/codeql.analysis.yml)

This repository holds JavaScript, HTML, Prisma Schema and other Files for URL Shortener App.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fflxhq%2Furl.shortener&env=DATABASE_URL&envDescription=Prisma%20Database%20Proxy%20URL)

### Instructions to run the app
#### Install the dependencies
```bash
npm install && npm run build
```
#### Run the app
```bash
vercel dev
```

***
### Environment Variable

Set Prisma Data Proxy as Environment Variable
```bash
DATABASE_URL=prisma://{DEPLOYMENT_LOCATION}.prisma-data.com/?api_key={DATA_PROXY_API_KEY}
```

***
### Stack Used
- JavaScript
- Prisma
- Planetscale
- Bootstrap