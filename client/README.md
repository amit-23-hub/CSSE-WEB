# React + Vite

project is live here : https://csse-web-eight.vercel.app/ 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Running the project (frontend + backend)

This repository contains a frontend React app (root) and a small Express backend located in `src/server`.

Quick start:

1. Install root deps and start the frontend dev server:

	- From project root:

	  npm install
	  npm run dev

2. Install and start the backend server (in a separate terminal):

	- From project root (helper):

	  npm run install-server-deps
	  npm run start:server

	- Or directly:

	  cd src/server
	  npm install
	  npm start

3. MongoDB

	- The backend uses a `MONGODB_URI` defined in `src/server/.env` (default is `mongodb://localhost:27017/Student`).
	- If you run a local MongoDB server, the default `.env` already points to `Student` DB. If you use MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string in `src/server/.env`.

4. Register & Login

	- With both frontend and backend running, open the frontend (usually http://localhost:5173), go to the Register/Sign Up page and create a user.
	- The backend will save the user to the `Student` database and the `Users` collection (passwords are hashed).
	- Use the Login form to sign in; the backend returns a JWT and user data.

If registration doesn't write to the DB, check the backend terminal for connection errors and ensure your `MONGODB_URI` points to a running MongoDB instance.
