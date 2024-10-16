# Dockerfile
# Step 1: Use the official Node.js image as the base image
FROM node:16 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install project dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Build the Vue.js application
RUN npm run build

# Step 7: Serve the app using an Nginx server
FROM nginx:alpine

# Step 8: Copy built files from the previous stage to Nginx's HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
