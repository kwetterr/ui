[![CodeQL](https://github.com/kwetterr/ui/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/kwetterr/ui/actions/workflows/codeql-analysis.yml)
[![Build](https://github.com/kwetterr/ui/actions/workflows/build.yml/badge.svg)](https://github.com/kwetterr/ui/actions/workflows/build.yml)
[![Publish Docker image](https://github.com/kwetterr/ui/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/kwetterr/ui/actions/workflows/docker-publish.yml)

# ui
Web interface for kwetter application.
- VueJS with TypeScript

## Run
Install dependencies
```zsh
npm install
```

Serve the application on http://localhost:8080.
```zsh
npm run serve
```

## Run in a Nginx Docker container
```zsh
docker build -t kwetter-ui .
```

```zsh
docker run -it -p 8080:80 --rm --name kwetter-ui-app kwetter-ui
```
