# Create and write to README.md file in parts due to content size limitations

# Step 1: Introduction and Table of Contents
readme_part1 = """
# Wikipedia Featured Content Project

This project is a full-stack application that allows users to explore Wikipedia's featured content based on selected dates and languages. The application consists of a ReactJS frontend and a NestJS backend, containerized using Docker and Docker Compose for easy deployment. Additionally, the project supports mobile deployment using Capacitor and includes both unit and end-to-end testing.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
  - [Running with Docker Compose](#running-with-docker-compose)
  - [Running Frontend Separately](#running-frontend-separately)
  - [Running Backend Separately](#running-backend-separately)
- [Mobile Deployment with Capacitor](#mobile-deployment-with-capacitor)
  - [iOS Setup](#ios-setup)
  - [Android Setup](#android-setup)
- [Testing](#testing)
  - [Unit Testing with Jest](#unit-testing-with-jest)
  - [End-to-End Testing with Cypress](#end-to-end-testing-with-cypress)
- [Troubleshooting](#troubleshooting)
- [License](#license)

"""

# Step 2: Project Structure and Features
readme_part2 = """
## Project Structure

\`\`\`
wikipedia-featured-project/
│
├── wikipedia-featured/         # ReactJS Frontend
│   ├── public/
│   ├── src/
│   ├── cypress/
│   ├── jest.setup.js
│   ├── Dockerfile
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── jest.config.js
│   ├── cypress.config.js
│   └── README.md
│
├── wikipedia-api/              # NestJS Backend
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── ormconfig.json
│   ├── main.ts
│   └── README.md
│
├── docker-compose.yml          # Docker Compose Configuration
└── README.md                   # Project-level README
\`\`\`

## Features

- **Frontend**: Built with ReactJS and TypeScript, displaying Wikipedia's featured content in a user-friendly grid with infinite scrolling.
- **Backend**: Built with NestJS, serving as a proxy to the Wikipedia API and integrating translation via LibreTranslate.
- **Dockerized**: Both frontend and backend are containerized for easy deployment.
- **Mobile Compatibility**: Option to deploy as a mobile app using Capacitor.
- **Unit Testing**: Unit tests with Jest and React Testing Library to ensure component functionality.
- **E2E Testing**: End-to-end tests with Cypress to ensure the application works as expected from the user's perspective.

"""

# Step 3: Prerequisites and Installation
readme_part3 = """
## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. [Download Node.js](https://nodejs.org/).
- **Docker**: Install Docker to run the application in containers. [Download Docker](https://www.docker.com/get-started).
- **Git**: Install Git for version control. [Download Git](https://git-scm.com/).
- **Xcode**: For iOS development, ensure Xcode is installed on macOS. [Download Xcode](https://developer.apple.com/xcode/).
- **Android Studio**: For Android development, ensure Android Studio is installed. [Download Android Studio](https://developer.android.com/studio).

## Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/your-username/wikipedia-featured-project.git
   cd wikipedia-featured-project
   \`\`\`

2. **Navigate to the frontend directory and install dependencies:**

   \`\`\`bash
   cd wikipedia-featured
   npm install
   \`\`\`

3. **Navigate to the backend directory and install dependencies:**

   \`\`\`bash
   cd ../wikipedia-api
   npm install
   \`\`\`

### Environment Variables

Set up environment variables for the frontend and backend.

#### Frontend (.env file)

Create a \`.env\` file in the \`wikipedia-featured\` directory:

\`\`\`
REACT_APP_API_URL=http://localhost:8080
\`\`\`

#### Backend (ormconfig.json)

Ensure your \`ormconfig.json\` in the \`wikipedia-api\` directory is configured for SQLite or your chosen database:

\`\`\`json
{
  "type": "sqlite",
  "database": "request-logs.db",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}
\`\`\`

"""

# Step 4: Running the Application
readme_part4 = """
## Running the Application

### Running with Docker Compose

Docker Compose is the recommended way to run the application as it simplifies dependency management and setup.

1. **Ensure you are in the root directory of the project:**

   \`\`\`bash
   cd wikipedia-featured-project
   \`\`\`

2. **Build and start the containers:**

   \`\`\`bash
   docker-compose up --build
   \`\`\`

   This command builds and starts both the frontend and backend containers.

3. **Access the application:**

   - Frontend: Open [http://localhost:3000](http://localhost:3000) in your browser.
   - Backend: API requests will be made to [http://localhost:8080](http://localhost:8080).

### Running Frontend Separately

1. **Navigate to the frontend directory:**

   \`\`\`bash
   cd wikipedia-featured
   \`\`\`

2. **Start the React application:**

   \`\`\`bash
   npm start
   \`\`\`

   The app will run at [http://localhost:3000](http://localhost:3000).

### Running Backend Separately

1. **Navigate to the backend directory:**

   \`\`\`bash
   cd wikipedia-api
   \`\`\`

2. **Start the NestJS server:**

   \`\`\`bash
   npm run start:dev
   \`\`\`

   The server will run at [http://localhost:8080](http://localhost:8080).

"""

# Step 5: Mobile Deployment with Capacitor
readme_part5 = """
## Mobile Deployment with Capacitor

Capacitor allows you to deploy your web app as a mobile app on iOS and Android.

### iOS Setup

1. **Add iOS platform:**

   \`\`\`bash
   npx cap add ios
   \`\`\`

2. **Open the project in Xcode:**

   \`\`\`bash
   npx cap open ios
   \`\`\`

3. **Agree to the Xcode license (if prompted):**

   \`\`\`bash
   sudo xcodebuild -license
   \`\`\`

4. **Build and run the app in Xcode:**

   - Select your target device or simulator.
   - Click the "Run" button or press \`Cmd+R\` to build and run the project.

### Android Setup

1. **Add Android platform:**

   \`\`\`bash
   npx cap add android
   \`\`\`

2. **Open the project in Android Studio:**

   \`\`\`bash
   npx cap open android
   \`\`\`

3. **Build and run the app in Android Studio:**

   - Select your target device or emulator.
   - Click the "Run" button to build and run the project.

"""

# Step 6: Testing (Unit Testing and E2E Testing)
readme_part6 = """
## Testing

### Unit Testing with Jest

1. **Install Jest and React Testing Library:**

   Navigate to the \`wikipedia-featured\` directory and install the necessary libraries:

   \`\`\`bash
   cd wikipedia-featured
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
   \`\`\`

2. **Add Jest configuration:**

   Ensure Jest is configured correctly in your \`package.json\` or create a \`jest.config.js\`:

   **Add script to \`package.json\`:**

   \`\`\`json
   "scripts": {
     "test": "jest --watch"
   }
   \`\`\`

   **Create \`jest.config.js\`:**

   \`\`\`javascript
   // jest.config.js

   module.exports = {
     testEnvironment: 'jsdom',
     setupFilesAfterEnv: ['./jest.setup.js'], // For custom Jest setup
     moduleName &#8203;:citation[oaicite:0]{index=0}&#8203;
