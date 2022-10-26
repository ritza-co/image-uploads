FROM caddy/caddy:alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY README.md /tmp

