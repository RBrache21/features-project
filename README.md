# Wikipedia Featured Content Project

This project is a full-stack application that allows users to explore Wikipedia's featured content based on selected dates and languages. The application consists of a ReactJS frontend and a NestJS backend, containerized using Docker and Docker Compose. Additionally, the project supports mobile deployment using Capacitor and includes both unit and end-to-end testing.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Running with Docker Compose](#running-with-docker-compose)
  - [Running Frontend Separately](#running-frontend-separately)
  - [Running Backend Separately](#running-backend-separately)
- [Mobile Deployment with Capacitor](#mobile-deployment-with-capacitor)
  - [iOS Setup](#ios-setup)
  - [Android Setup](#android-setup)
- [Testing](#testing)
  - [End-to-End Testing with Cypress](#end-to-end-testing-with-cypress)
- [Important Notes](#important-notes)

## Prerequisites
- Nodejs
- Docker
- Git
- Xcode: For IOS
- Andriod Studio: For Android

## Installation
1. Clone the repository
2. Navigate to wiki-front `cd wiki-front` and run `npm install`. Also create a .env and add this: REACT_APP_API_URL=http://localhost:3001
4. Navigate to wiki-api `cd wiki-api` and run `npm install`

## Running the application
### Running with Docker
- Navigate to the root directory features-project
- Run `docker-compose up --build`

### Running Frontend Separately
- Navigate to wiki-front `cd wiki-front`
- Run `npm install` if not done previously
- Run `npm start`

*NOTE: For the frontend to work without the backend, go to the services folder and modify index.tsx and wikipediaAPI.ts. In both you have options to comment out with backend ot without backend.

### Running Backend Separstely
- Navigate to wiki-api `cd wiki-api`
- Run `npm install` if not done previously
- Run `npm run start:dev`
  
## Mobile Deployment
### IOS
- Navigate to wiki-front `cd wiki-front`
- Run `npx cap add ios`
- Run npx cap open ios`
- Agree to the xcode license: `sudo xcodebuild -license`
### Android
- Navigate to wiki-front `cd wiki-front`
- Run `npx cap add andriod`
- Run npx cap open android`
- Select Device
- Click run

## Testing
### E2E Testing
- Navigate to wiki-front `cd wiki front`
- Either run `npm run cy:open` to open the cypress GUI or run `npx cypress run`

## Important Notes:
- To test the infinite scroll feature, select "Most read", hit the enable infinite scroll button and look for a date with enough content (June 21 2024 is an option).
- The wikipedia api has more languages available but we pick just the four with the most content.



