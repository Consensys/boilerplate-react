FROM node:8.9-alpine as base

# Set NODE_ENV to production
ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

FROM base as builder

# Install dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn install && yarn cache clean

# Copy source scripts
COPY . /usr/src/app

# Build react SPA bundle
RUN GENERATE_SOURCEMAP=false yarn build

FROM base

# Set healthcheck route
RUN apk --no-cache add curl
HEALTHCHECK CMD curl -f http://localhost:3000/healthcheck || exit 1

# Install server
COPY --from=builder /usr/src/app/server/ /usr/src/app/
RUN yarn install && yarn cache clean

# Copy SPA bundle
COPY --from=builder /usr/src/app/build /usr/src/app/build/

# Runtime
USER node
CMD [ "yarn", "start" ]
