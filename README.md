# File Integrity Verification System

A full-stack web application that implements file integrity verification using **SHA-256** and **HMAC-SHA-256** cryptographic algorithms.  
This system replicates the functionality of traditional C-based implementations using modern web technologies.

---

## Project Information

**Course Name:** Computer Networks 
**Course ID:** BCSE308L 
**Academic Year:** 2024–2025  

---

## Features

### 🔐 Core Functionality
- **Sender Mode:** Upload a file to generate a verification code using SHA-256 and HMAC-SHA-256  
- **Receiver Mode:** Verify file integrity by uploading the received file and entering the verification code  
- **File Comparison:** Direct comparison of two files using cryptographic hashes  
- **Report Generation:** Download detailed integrity verification reports  

### 🛡️ Security Features
- SHA-256 cryptographic hashing  
- HMAC-SHA-256 with secret key authentication  
- Random 16-byte salt generation  
- Timing-safe comparison to prevent timing attacks  
- Rate limiting (10 requests per minute)  
- File size limit (50 MB)  
- Secure file handling with automatic cleanup  
- CORS protection  
- Helmet.js security headers  

### 📘 Educational Components
- **Learn Section:** Explains SHA-256, HMAC, and salt-based hashing  
- **Help Section:** Step-by-step usage and troubleshooting guide  
- **Developed By Section:** Project overview and team credits  

---



## Setup Instructions

### 🧩 Prerequisites
- Node.js (v16 or higher)  
- npm or yarn  

### ⚙️ Installation

Install frontend dependencies:
```bash
npm install
```

Install backend dependencies:
```bash
cd server
npm install
cd ..
```

Create a `.env` file with:
```bash
HMAC_KEY=<YOUR_SECRET_KEY>
VITE_API_URL=http://localhost:3001
```

### ▶️ Running the Application

Start the backend server:
```bash
cd server
node index.js
```
Backend runs at **http://localhost:3001**

Start the frontend development server:
```bash
npm run dev
```
Frontend runs at **http://localhost:5173**

---

## Building for Production
```bash
npm run build
```

---

## Troubleshooting

**File Too Large**  
→ Must be under 50 MB. Compress before uploading.  

**Verification Code Mismatch**  
→ Possible causes:  
- File modified post-generation  
- Wrong or corrupted file  
- Incorrect verification code or salt  

**Rate Limit Exceeded**  
→ Wait one minute before retrying.  

**Server Connection Failed**  
→ Ensure backend is running on port 3001 and `VITE_API_URL` is correct.  

---