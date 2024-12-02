# Crud-MySQL: A Full-Stack E-commerce Application

## Overview

Crud-MySQL is a basic e-commerce system built with NestJS backend and React frontend. It features user management, product management, order processing, and category organization.

## Features

* RESTful API using NestJS
* React-based frontend with Material-UI
* MySQL database integration
* User CRUD operations
* Order management system
* Product categorization

## Prerequisites

* Node.js (v14 or higher)
* npm (v6 or higher)
* MySQL (v5.7 or higher)
* Git

## Installation

### Server Setup

1. Clone the repository: `git clone https://github.com/yourusername/Crud-MySQL.git`
2. Navigate to server directory: `cd Crud-MySQL/ecommers-server`
3. Install dependencies: `npm install`
4. Configure database: Create a MySQL database and update connection settings in `src/app.module.ts`
5. Start the server: `npm run start:dev` (development mode) or `npm run start:prod` (production mode)

### UI Setup

1. Navigate to UI directory: `cd ../ecommers-ui`
2. Install dependencies: `npm install`
3. Start the UI application: `npm start`

## Database Configuration

1. Create MySQL database: `CREATE DATABASE ecommerce;`
2. The following tables will be created automatically when `synchronize` is set to `true`:
	* users
	* products
	* categories
	* orders
	* order_items

## Running the Application

### Server

1. `cd ecommers-server`
2. `npm run start:dev`

### UI

1. `cd ecommers-ui`
2. `npm start`

## API Documentation

Access Swagger API documentation at: `http://localhost:4000/api`

Available endpoints:

* `/users` - User management
* `/products` - Product management
* `/categories` - Category management
* `/orders` - Order management
* `/order-items` - Order items management

## Project Structure

* `Crud-MySQL/`
	+ `ecommers-server/`
		- `src/`
			- `users/`
			- `products/`
			- `categories/`
			- `orders/`
			- `order-items/`
		- `test/`
	+ `ecommers-ui/`
		- `src/`
			- `components/`
			- `services/`
		- `public/`

## License

This project is licensed under the UNLICENSED License.
