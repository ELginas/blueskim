# blueskim

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
