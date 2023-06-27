# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine as stage
# Set the working directory to /app inside the container
ARG NPM_TOKEN

WORKDIR /app
# Copy app files
COPY package.json /app/package.json  
COPY package-lock.json /app/package-lock.json  

# RUN echo "@remla23-team2:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=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" >> .npmrc
RUN echo "@remla23-team2:registry=https://npm.pkg.github.com" >> /app/.npmrc && echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> /app/.npmrc && \
    npm ci && \
    rm -f /app/.npmrc

COPY . /app/

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# Build the app
RUN npm run build

FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
COPY --from=stage /app/build .
EXPOSE 80


# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""])
