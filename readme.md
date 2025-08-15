# 🍽️ Food Ordering Application

A full-stack food ordering web application built with React, Node.js, and MongoDB. This application allows users to browse menus, place orders.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 👤 User Features

- **Authentication**: User registration and login with JWT
- **Product Browsing**: View available food items with details
- **Shopping Cart**: Add, update, and remove items from cart
- **Order Management**: Place orders and view order history
- **Profile Management**: View and update user profile details
- **Responsive Design**: Mobile-friendly interface

### 🔧 Admin Features

- **Product Management**: Add, edit, update, and delete food items
- **Order Management**: View and manage all customer orders
- **Dashboard**: Comprehensive admin dashboard for restaurant management

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **React Bootstrap** - UI components
- **Axios** - HTTP client
- **React Dropzone** - File upload functionality
- **React Icons** - Icon library

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Nodemailer** - Email functionality
- **Express Validator** - Input validation
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd food-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Environment Configuration

Create a `config.env` file in the backend directory:

```env
NODE_ENV=development
PORT=5000
HOST_NAME=localhost
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
EMAIL_FROM=your_email@example.com
EMAIL_PASSWORD=your_email_password
```

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

## 🎯 Usage

### Development Mode

#### Option 1: Run Backend and Frontend Separately

**Backend:**

```bash
cd backend
npm run server
```

**Frontend:**

```bash
cd frontend
npm start
```

#### Option 2: Run Both Simultaneously

```bash
cd backend
npm run dev
```

### Production Mode

**Backend:**

```bash
cd backend
npm start
```

**Frontend:**

```bash
cd frontend
npm run build
```

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Products

- `GET /api/products` - Get all products
- `POST /api/products` - Create new product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Orders

- `GET /api/order` - Get user orders
- `POST /api/order` - Create new order
- `GET /api/order/:id` - Get specific order

### Private Routes

- `GET /api/private` - Protected route example

## 📁 Project Structure

```
food-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── order.js
│   │   ├── product.js
│   │   └── user.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── error.js
│   ├── models/
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── route/
│   │   ├── orderRoute.js
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   ├── utils/
│   │   ├── errorResponse.js
│   │   └── sendEmail.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About/
│   │   │   ├── Bar/
│   │   │   ├── Button/
│   │   │   ├── Canvas/
│   │   │   ├── Card/
│   │   │   ├── DropZone/
│   │   │   ├── Header/
│   │   │   ├── Heading/
│   │   │   ├── Input/
│   │   │   └── List/
│   │   ├── containers/
│   │   ├── store/
│   │   │   ├── actions/
│   │   │   ├── constants/
│   │   │   └── reducers/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🔧 Key Features Implementation

### Authentication System

- JWT-based authentication
- Password hashing with bcrypt
- Protected routes middleware
- User session management

### State Management

- Redux Toolkit for global state
- Separate reducers for users, products, orders, and cart
- Async actions with Redux Thunk

### File Upload

- Multer for backend file handling
- React Dropzone for frontend file upload
- Image storage and management

### Error Handling

- Centralized error handling middleware
- Custom error responses
- Client-side error boundaries

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Note**: This application is designed for educational purposes and can be extended for production use with additional security measures and optimizations.
