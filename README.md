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
