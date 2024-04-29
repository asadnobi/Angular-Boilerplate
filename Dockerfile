# Stage 1: Build the Angular application
FROM node:14 as build

WORKDIR /app

# Copy package.json and package-lock.json for npm install
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Angular application with production configuration
RUN ng build --prod

# Stage 2: Serve the built Angular application using NGINX
FROM nginx:alpine

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/<your-angular-app> /usr/share/nginx/html

# Replace the default NGINX configuration with a custom one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Command to start NGINX
CMD ["nginx", "-g", "daemon off;"]
