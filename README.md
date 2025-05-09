# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Task Manager App

A simple React task management app that lets users add, edit, and delete tasks with title and description fields. It uses React Router for navigation and React Toastify for notifications.

## Features

- Add tasks with a title and description
- Edit tasks using a modal dialog
- Delete tasks
- Navigation between pages using a dashboard layout
- Toast notifications for user feedback
- Auto-resizing textarea for smooth editing experience

## Technologies Used

- React
- TypeScript
- React Router
- React Toastify
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` to see the app in action.
5. You can add, edit, and delete tasks using the provided UI.
6. The app uses React Router for navigation, so you can explore different pages like Home, Dashboard, and Page2.
7. The task modal allows you to add and edit tasks with a title and description.
8. The app uses React Toastify for notifications, so you'll see toast messages when you add, edit, or delete tasks.

### Folder Structure

```bash
src/
├── pages/
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Home.tsx
│   └── Page2.tsx
├── components/
│   ├── TaskCard.tsx
│   └── TaskModal.tsx
├── utils/
│   └── types.ts
├── App.tsx
└── main.tsx
```

### License
This project is for assessment purposes.