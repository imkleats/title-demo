# Installation

## Environment

This technical demonstration was developed using:

- Node v14.9.0
- Windows 10 OS (i.e. certain `package.json` build scripts may need to be altered for Linux/Mac OS)

The remaining instructions assume the repository has been `git clone ...`'d into an appropriate directory.

## Production Build

For the convenience of viewing the demo, the compiled/optimized builds of both the Express Server and the React Application are included in this repository. To view the production build:

- `cd server`
- Optional: Set up `.env` file with your own specifications.
- `yarn`
- `yarn start`
- Access the server using your prefered browser or client:
  - React application through http://localhost:4000
  - Graphiql is enabled on http://localhost:4000/graphql
  - Rest endpoint is enabled on http://localhost:4000/api/titles

## Development Mode

For the convenience of viewing the demo, the compiled/optimized builds of both the Express Server and the React Application are included in this repository. To view the development servers:

### Install and run Express server in development mode

- `cd server`
- Optional: Set up `.env` file with your own specifications.
- `yarn`
- `yarn start:dev`

### Install and run React development server

- `cd ui`
- `yarn`
- `yarn start`

### Access the server using your prefered browser or client:

- React application through http://localhost:3000
- Graphiql is enabled on http://localhost:4000/graphql
- Rest endpoint is enabled on http://localhost:4000/api/titles
