# blueskim

## Description

<img width="1865" height="1019" alt="image" src="https://github.com/user-attachments/assets/5759902c-21bb-4d88-a27c-702babfa75e0" />

**Blueskim** is full-stack, open-source chat application inspired by Discord, with a strong emphasis on clean architecture and maintainable code. Iterated through multiple rewrites to refine structure, resulting in a well-organized scalable codebase with a polished vertical slice of the frontend. The development was stopped before the backend was properly implemented and other frontend pages were implemented due to very time-intensive nature of keeping near-perfect clean codebase without any minor or major defects.

## Developing

In first terminal:

```sh
cd frontend
pnpm install
pnpm dev
```

In second terminal:

```sh
cd backend
cargo r
```

In third terminal:

```sh
cd nginx
nginx -p . -c nginx.conf

# on nginx config change
nginx -p . -c nginx.conf -s reload

# shutdown
nginx -p . -c nginx.conf -s quit
```
