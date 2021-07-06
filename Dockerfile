# Build the React application
FROM node:alpine AS node_builder
COPY --from=builder /app ./
RUN npm install
RUN npm run build

# Final stage build, this will be the container
# that we will deploy to production
FROM alpine:latest
RUN apk --no-cache add ca-certificates
COPY --from=node_builder /build ./web
