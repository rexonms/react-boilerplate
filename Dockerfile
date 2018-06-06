FROM artifactory.domain.com:8008/dir/nodejs-8-sdk:latest as build-img

# Prep the temporary build image
WORKDIR /app
COPY . .

# Set npm registery to domainName
RUN npm config set registry https://npmregistry.domainName.com

# Install dependencies
RUN yarn
RUN yarn build

# Prep the final image
FROM nginx:1.13-alpine
WORKDIR /usr/share/nginx/html

COPY --from=build-img /app/RELEASE ./__status__/version
COPY --from=build-img /app/build ./

# No ENTRYPOINT or CMD necessary since it's already defined in
# the base image
