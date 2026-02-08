## 🚀 How to Run the Project

This project is fully Dockerized for a seamless evaluation experience. Please follow these steps:

### 1. Prerequisites
* Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running on your machine.

### 2. Setup & Execution
1. Open your terminal in the project root folder (`naksh-jewels-assignment`).
2. Run the following command to build and start both the Frontend and Backend services:
   ```bash
   docker-compose up --build

### 3. Access the Application
* **Frontend**: Open [http://localhost:3000](http://localhost:3000) to view the Jewelry Collection and Shopping Cart.
* **Backend API**: The server runs on [http://localhost:5000](http://localhost:5000).

> **Note**: If the backend API is unreachable due to local network restrictions, the application will automatically use a **fallback data mechanism** to ensure the jewelry cards and cart logic are still fully functional for your review.