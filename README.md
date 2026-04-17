
---

# 💊 Drug Expiry Management System

A full-stack web application for managing drug inventory and tracking expiry dates.
Built to help pharmacies, hospitals, and inventory managers monitor drug status, avoid wastage, and ensure safety.

---

## 🚀 Features

* 📦 Add new drugs with batch details
* 🚫 Prevent duplicate drug entries (same drug + batch)
* 📊 Dashboard with real-time statistics
* ⚠️ Expiry alerts (Expired & Expiring Soon)
* 📋 Drug inventory table with status indicators
* 📈 Visual chart of drug status distribution
* 🎯 Clean and modern UI

---

## 🖥️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Recharts (for charts)
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure

```
drug-expiry/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
├── assets/
│   ├── dashboard.png
│   ├── add-drug.png
│   ├── inventory.png
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/drug-expiry.git
cd drug-expiry
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### ➕ Add Drug

```
POST /api/drugs/add
```

### 📥 Get All Drugs

```
GET /api/drugs
```

---

## 🧠 Key Logic

### 🔒 Duplicate Prevention

Drugs are uniquely identified using:

```
drug_name + batch_number
```

* Prevented at application level
* Enforced at database level (MongoDB unique index)

---

### 📊 Drug Status Categories

* ❌ **Expired** → expiry date < today
* ⚠️ **Expiring Soon** → within 30 days
* ✅ **Safe** → beyond 30 days

---

## 📸 Screenshots

### Dashboard

![Dashboard](./assests/dashboard.png)

### Add Drug Page

![Add Drug](./assests/add-drug.png)


---

## 🚀 Future Improvements

* 🔐 Authentication system (login/signup)
* ✏️ Edit & update drugs
* 🗑️ Delete drugs with confirmation
* 🔍 Search and filter functionality
* 🌙 Dark mode
* 📊 Advanced analytics dashboard

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Dev Matt**
Frontend Developer | Full Stack in Progress 🚀

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub!

---


