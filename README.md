# CustomerManager

CustomerManager is a simple customer list application built with React (TypeScript) for the frontend, Express for the backend, and PostgreSQL for the database. The application is containerized using Docker and interactions between different parts of the application are handled through REST API calls.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Features

- Display a list of customers (name, email and phone)
- Create a new customer
- Delete a customer

## Installation

### Prerequisites

- [Docker](https://www.docker.com/)

### Build and Start Containers

```bash
docker-compose up -d --build
```

This will start the frontend, backend, and database services. The frontend application will be available at `http://localhost:3000`, backend application will be available at `http://localhost:3005/api`.

### Running Locally

#### Backend

```bash
cd customer-manager-backend
npm run dev
```

#### Frontend

```bash
cd customer-manager-frontend
npm start
```

## API Endpoints

- **GET /customers**: Fetch all customers
- **POST /customers**: Create a new customer
  - Request Body: `{ "name": "Customer Name", "email": "customer@example.com", phone: "012345678" }`
- **DELETE /customers/:id**: Delete a customer by ID
