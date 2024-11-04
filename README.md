# Personal Finance Tracker

A simple and efficient personal finance tracking application built using **React** and **Firebase**. This project enables users to manage their personal finances effectively with features like authentication, transaction tracking, data visualization, and personalized data storage. 

With this application, users can easily track their expenses and income, visualize financial data through charts, and analyze their spending patterns. The user interface is designed to be intuitive, leveraging **Ant Design** for sleek and responsive components.

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Personalized Dashboard**: Each user has a personal dashboard with their own financial data.
- **Transaction Tracking**: Easily add, view, and manage transactions (income and expenses).
- **Data Visualization**: Charts and graphs to give insights into spending and income distribution.
- **Export & Import**: Import and export transactions data in convenient formats (CSV).
- **Tables and Filters**: Filter and sort transaction data for detailed financial analysis.

---

## Project Setup

Follow these steps to set up and run the project:

### 1. Firebase Setup
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firestore Database** and **Authentication** (Google, Email/Password) for the project.
   - Copy the Firebase config object and paste it in a `.env` file in the project.

### 2. React Router and Landing Page
   - Set up **React Router** for navigation between pages.
   - Create a basic **Landing Page** to welcome users and guide them to login/register.

### 3. Authentication Using Firebase
   - Implement authentication using Firebase’s authentication service.
   - Add functionality to **Log in** and **Register** new users.
   - Store user data securely in Firestore.

### 4. Login and Create User Document
   - After user registration, create a user document in Firestore with user-specific data.
   - Include user ID, name, and any other necessary fields for future reference.

### 5. React Firebase Hooks and Dashboards
   - Use **React Firebase Hooks** to simplify Firebase authentication and Firestore data fetching.
   - Design a **Dashboard** where users can view their transactions and other financial data.

### 6. Ant Design and Dashboard
   - Integrate **Ant Design** components for a professional and responsive UI.
   - Use Ant Design’s table, forms, and chart components to organize data effectively in the dashboard.

### 7. Adding Transactions in Firebase & Fetching them
   - Add functionality for users to create new transactions (income/expense).
   - Store transaction data in Firestore and fetch it in real-time to display on the dashboard.

### 8. Creating Tables and Filters
   - Use tables to organize transactions data.
   - Implement filters for date, category, and amount to help users analyze their financial records more easily.

### 9. Export and Import
   - Allow users to export their transaction data as a CSV file for backup.
   - Implement functionality to import data, allowing users to upload their previous records.

### 10. Charts and PieChart
   - Use charting libraries to display data visually.
   - Add a **Pie Chart** to show the breakdown of expenses by category.
   - Include **Bar or Line Charts** for monthly or yearly financial summaries.

---

## Technologies Used

- **React** - Frontend framework for building the user interface.
- **Firebase** - Backend-as-a-Service (BaaS) for authentication, database, and data storage.
- **React Router** - For managing navigation in the application.
- **Ant Design** - UI component library for a consistent and modern interface.
- **Chart.js or Recharts** - For data visualization, including Pie and Bar charts.
- **React Firebase Hooks** - Custom hooks for Firebase that simplify API integration.

---

## Installation and Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/personal-finance-tracker.git
   cd personal-finance-tracker
