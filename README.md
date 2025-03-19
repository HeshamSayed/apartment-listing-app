# Apartment Listing API

A public backend API for managing apartment listings, built using **Node.js**, **Express**, and **TypeScript**, with **Sequelize** (via **sequelize-typescript**) to interact with a **PostgreSQL** database. This version does not include user authentication, so **all endpoints** are open.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Configuration](#configuration)
- [Database](#database)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)
- [Why These Packages and ORM?](#why-these-packages-and-orm)
- [License](#license)

---

## Overview

This API allows you to **create**, **retrieve**, and **manage** apartment records.  
It leverages **TypeScript** for improved reliability and maintainability, and uses **Sequelize** together with **sequelize-typescript** for a clean, class-based approach to data modeling. All endpoints are **public**—there is no user model or authentication.

---

## Technologies Used

- **Node.js & Express**  
  - Powers the HTTP server and provides a straightforward way to define routes.

- **TypeScript**  
  - Offers static type checking, making the code more maintainable and reducing runtime errors.

- **Sequelize & sequelize-typescript**  
  - **Sequelize**: A popular ORM that abstracts SQL queries, making database operations more intuitive.  
  - **sequelize-typescript**: Adds TypeScript decorators, enabling a class-based approach to defining models.

- **PostgreSQL**  
  - A robust, open-source relational database.
  **Database Credentials**
  - PORT=5000
  - DB_HOST=db
  - DB_PORT=5432 ---> adjust this as your need as if you have an instance of db server running with this port it will produce conflicts. thanks
  - DB_USER=postgres
  - DB_PASSWORD=postgres
  - DB_NAME=apartments

- **dotenv**  
  - Loads environment variables from a `.env` file, keeping sensitive configuration out of the code.

- **ts-node & nodemon**  
  - **ts-node**: Allows you to run TypeScript files directly without manual compilation.  
  - **nodemon**: Automatically restarts the server when files change, streamlining the development process.

---



## Project Structure

```plaintext
apartment-listing-app/
└── backend/
    ├── src/
    │   ├── controllers/
    │   │   └── apartmentController.ts  # Endpoint logic for apartments
    │   ├── db/
    │   │   └── index.ts                # Sets up Sequelize connection
    │   ├── models/
    │   │   └── Apartment.ts            # Defines the Apartment model (via decorators)
    │   ├── routes/
    │   │   └── apartmentRoutes.ts      # Declares the apartment-related routes
    │   ├── services/
    │   │   └── apartmentService.ts     # Business logic and DB queries
    │   └── app.ts                      # Main application entry point
    ├── .env                            # Environment variables
    ├── package.json                    # Lists dependencies and scripts
    └── tsconfig.json                   # TypeScript compiler configuration


--

# Frontend (Next.js) – Apartment Listings

This Next.js application provides a front-end interface for listing apartments and viewing apartment details. It fetches data from a backend API and displays the results in a modern UI. The application uses server components for data fetching and client components for interactivity (such as search filtering).

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the App (Development)](#running-the-app-development)
- [Running with Docker](#running-with-docker)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Apartment Listings**: Displays a grid of apartments fetched from the backend.
- **Detail Pages**: View specific apartment details by clicking on a listing.
- **Client-Side Search**: Filter the listings in real time by unit name, number, or project. (the bouns task)
- **Next.js App Router**: Utilizes server components for fetching data and client components for interactivity.
- **Docker Support**: Easily run the frontend (and backend) using Docker Compose.

## Folder Structure

A typical project layout might look like this:

