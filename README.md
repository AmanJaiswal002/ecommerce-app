# 🛒 E-Commerce Full-Stack Application

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite)

A modern, highly scalable full-stack e-commerce application built strictly on the **MERN** *(MongoDB, Express.js, React.js, Node.js)* stack. This platform offers a seamless shopping experience for users, while providing a powerful and secure admin dashboard for store owners to manage products and orders.

---

## 🔗 Live Demo (Live Links)
You can test the application live here:
- **Frontend App:** [E-Commerce Frontend](https://ecommerce-frontend-i2hb.onrender.com)
- **Admin Dashboard:** [E-Commerce Admin Panel](https://ecommerce-admin-bg28.onrender.com)
- **Backend API:** [Live Backend Server](https://ecommerce-backend-huf3.onrender.com)

---

## ✨ Key Features

### 🛍️ For Users (Frontend)
- **Product Browsing & Filtering**: Browse through a wide collection of products, complete with detailed pages.
- **Shopping Cart System**: Add/remove products and place orders effortlessly.
- **Secure Authentication**: End-to-end secure user signups and logins using JWT & bcrypt.
- **Payment Gateway Integrations**: Secure checkout powered by **Stripe** and **Razorpay**.

### 🔐 For Store Owners (Admin Dashboard)
- **Product Management**: Upload new products with images securely stored on **Cloudinary**.
- **Order Tracking**: Track, update, and manage incoming customer orders.
- **Admin Authentication**: Safe, token-based verification restricted to authorized admins.

---

## 🛠️ Tech Stack

### Frontend & Admin Panel
- **React.js** (Vite setup)
- **Tailwind CSS** (for highly responsive and beautiful UI)
- **React Router DOM** (Client-side routing)
- **Axios** (Data fetching)
- **React Toastify** (Engaging alerts/notifications)

### Backend & Database
- **Node.js & Express.js** (API server creation and routing)
- **MongoDB & Mongoose** (Database handling)
- **JWT & bcrypt** (User security and hashing)
- **Multer & Cloudinary** (Robust image uploading architecture)
- **Razorpay & Stripe** (Payment processing modules)

---

## 📂 Project Structure

This project follows a neat, modular architecture split into three distinct directories:

```text
ECOMMERCE-APP/
├── frontend/     # The customer-facing React web application
├── admin/        # The store-owner/admin dashboard (React)
└── backend/      # The Node.js API that connects the DB, Payment Gateways & Frontends
```

---

## 🚀 Local Setup Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/YourUsername/ECOMMERCE-APP.git
cd ECOMMERCE-APP
```

### 2. Configure Environment Variables
You will need to create `.env` files in all three primary directories (`backend/`, `frontend/`, and `admin/`).

**Backend (`backend/.env`):**
```env
MONGODB_URI = "your_mongodb_connection_string"
CLOUDINARY_API_KEY = "your_cloudinary_api_key"
CLOUDINARY_SECRET_KEY = "your_cloudinary_secret_key"
CLOUDINARY_NAME = "your_cloudinary_name"
JWT_SECRET = "your_random_jwt_secret"
ADMIN_EMAIL = "admin_login_email"
ADMIN_PASSWORD = "admin_login_password"
STRIPE_SECRET_KEY = "your_stripe_secret_key"
RAZORPAY_KEY_SECRET = "your_razorpay_secret"
RAZORPAY_KEY_ID = "your_razorpay_key_id"
```

**Frontend (`frontend/.env`):**
```env
VITE_BACKEND_URL = "http://localhost:4000"
VITE_RAZORPAY_KEY_ID = "your_razorpay_key_id"
```

**Admin (`admin/.env`):**
```env
VITE_BACKEND_URL = "http://localhost:4000"
```

### 3. Install Dependencies & Start the Servers

You will need to open **three separate terminals**, one for each directory.

#### Start the Backend Server:
```bash
cd backend
npm install
npm run server
```

#### Start the User Frontend:
```bash
cd frontend
npm install
npm run dev
```

#### Start the Admin Dashboard:
```bash
cd admin
npm install
npm run dev
```

---

## 🤝 Contribution Guidelines
Contributions, issues, and feature requests are always welcome! Let's make this app even better.

---
*Built with ❤️ for E-Commerce lovers.*
