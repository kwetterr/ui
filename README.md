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

## Run with Docker
```zsh
docker build -t kwetter-ui .
```

```zsh
docker run -it -p 8080:8080 --rm --name kwetter-ui-app kwetter-ui
```
