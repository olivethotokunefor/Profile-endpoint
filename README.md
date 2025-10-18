# Stage 0: Dynamic Profile Endpoint

## 🚀 Overview
This project implements the Stage 0 task — a simple RESTful API built with **Express**.  
It exposes one endpoint, `/me`, which returns your profile information, the current UTC timestamp, and a random cat fact fetched from the **Cat Facts API** (`https://catfact.ninja/fact`).

---

## 🧩 Endpoint

### **GET /me**

**Response Example**
```json
{
  "status": "success",
  "user": {
    "email": "olivethotokunefor@gmail.com",
    "name": "Oliveth Otokunefor",
    "stack": "Express"
  },
  "timestamp": "2025-10-18T20:35:45.412Z",
  "fact": "Cats have five toes on their front paws, but only four on the back."
}
