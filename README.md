# Algo Root Dashboard

## 📌 Project Overview
This project is a **React.js** application with user authentication and a dashboard containing a sortable, filterable data table with pagination. 

## 🚀 Features
### 1. User Authentication
- Login and signup using email and password.
- Input validation with error messages.
- User session management using **localStorage**.
- Redirect users to the dashboard after login.

### 2. Dashboard (After Login)
- Navbar with:
  - Logo (left)
  - User icon (right) with dropdown menu:
    - Logged-in user details (name/email)
    - **Logout** option (clears local storage)
    - **Delete Account** option (removes user data from local storage)
- Sidebar with the current active page indicator.

### 3. Details Page (Data Table)
- Displays data in a structured table.
- Features:
  - **Sorting** (ascending/descending)
  - **Searching** (filter data based on user input)
  - **Pagination** (limit number of rows per page)

### 4. General Requirements
- Uses **localStorage** for authentication & session management.
- Responsive design for **desktop & mobile**.
- State management using **useContext** (or Redux if needed).

---

## 🛠️ Technologies Used
- **React.js** (TypeScript)
- **React Context API** (for state management)
- **React Hook Form** (for form validation)
- **Zod** (for schema validation)
- **React Router Dom** (for routing)
- **React Icons** (for icons)
- **lucid-react** (for responsive design)
- **Tailwind CSS** (for styling)
- **LocalStorage** (for authentication session management)
- **Mock API** (for data table population)

---

## 🔧 Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Bhupendra-Maurya/algoroot-dashboard.git
   cd algoroot-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
3. Run the project:
   ```bash
   npm run dev   # or yarn start
   ```
4. Open ` http://localhost:5173` in your browser.

---

