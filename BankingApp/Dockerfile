# Use an appropriate base image for your Angular app
FROM node:14

WORKDIR /app

# Copy the frontend source code
COPY . ./

RUN npm install

# Install dependencies and build the frontend app
RUN npm build

# Expose the port on which the Angular app runs
EXPOSE 4200

# Start the Angular app
CMD ["npm", "start"]
