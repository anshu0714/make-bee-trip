# 🐝 Make Bee Trip – Travel & Tourism Platform

This project is developed as part of the **Technical Round Assignment** for the Web Developer position at Appsite Labs.

It is a full-stack travel platform that provides a clean and responsive landing page along with basic backend APIs to fetch travel-related data.

---

## Live Link

- Frontend: https://make-bee-trip.vercel.app/
- Backend: https://make-bee-trip-backend.onrender.com/api/v1/health

---

## 🚀 Tech Stack

### Frontend

- React JS (Vite)
- SCSS (Modular styling)
- React Router

### Backend

- Node.js
- Express.js
- MongoDB (for search tracking)

---

## ✨ Features

### 🧭 Landing Page

- Modern, responsive UI
- Sections included:
  - Hero
  - Services
  - Popular Destinations
  - Featured Hotels
  - Testimonials
  - Why Choose Us
  - How It Works

---

### 🔎 Travel Search (Core Requirement)

Supports all required services:

#### ✈️ Flight Booking

- API-based data
- Search by `from` and `to`

#### 🚌 Bus Booking

- API-based data
- Includes route, duration, and arrival

#### 🚆 Train Booking

- API-based data
- Includes class, duration, and arrival

#### 🏨 Hotel Booking

- Manual + API-based listing
- Includes images, rating, and pricing

---

### 📊 Popular Searches

- Tracks user searches in MongoDB
- Displays top searches dynamically on UI

---

### 🎫 Results Page

- Displays filtered results based on search
- Filters include:
  - Location (from/to/city)
  - Price range
- Sorting based on price

---

### 🎨 UI/UX Highlights

- Fully responsive design
- Tab-based search (Flight / Bus / Train / Hotel)
- Dynamic suggestions based on available data
- Scroll-to-top navigation
- Interactive service cards (navigate to results)

---

### 🧾 Booking Flow

- “Book Now” button triggers UI feedback (toast)
- No real booking system (as per assignment scope)

---

## 📂 Project Structure

```
make-bee-trip/
│
├── frontend/
│   ├── assets/
│   ├── components/
│   ├── features/travel/
│   ├── layouts/
│   ├── styles/
│   ├── services/
│   └── utils/
│
├── backend/
│   ├── features/
│   │   ├── travel/
│   │   └── search/
│   ├── config/
│   ├── constants/
│   ├── middleware/
│   └── utils/
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <your-repo-link>
cd make-bee-trip
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file:

```
VITE_API_URL=<backend-url>/api/v1
```

Run server:

```bash
npm run dev
```

---

## 🌐 API Endpoints

### Travel Data

```
GET /api/v1/travel?type=flight
GET /api/v1/travel?type=bus
GET /api/v1/travel?type=train
GET /api/v1/travel?type=hotel
```

---

### Popular Searches

```
GET /api/v1/search/popular
```

---

## 🚀 Deployment

### Frontend (Vercel)

- Set root directory to `frontend`
- Add environment variable:

  ```
  VITE_API_URL=<backend-url>/api/v1
  ```

---

### Backend (Render)

- Root directory: `backend`
- Add environment variables:

  ```
  PORT=5000
  MONGO_URI=your_mongodb_connection
  BASE-URI=your_frontend_link
  ```

---

## ⚠️ Notes

- Backend APIs use static datasets (no external APIs)
- Booking functionality is UI-only (no payment or ticketing)

---

## 📌 Future Improvements

- Integration with real travel APIs
- Authentication system
- Booking history
- Payment gateway

---

## 👨‍💻 Author

Anshu
