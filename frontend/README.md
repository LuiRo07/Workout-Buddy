# Workout Buddy - Frontend

This is the React frontend for the Workout Buddy MERN application. The frontend provides a modern, responsive user interface for managing workouts and fitness tracking.

## 🚀 Features

- Responsive design that works on desktop and mobile
- User authentication (login/signup)
- Workout management (create, view, edit, delete)
- Real-time updates
- Modern React with hooks and functional components

## 🛠️ Built With

- **React 18** - JavaScript library for building user interfaces
- **Create React App** - Development environment and build tools
- **CSS3** - Modern styling and responsive design
- **React Router** - Client-side routing
- **Context API** - State management

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── context/        # React Context providers
│   ├── App.js          # Main App component
│   └── index.js        # Entry point
└── package.json
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Backend server running on `http://localhost:4000`

### Installation

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   
   The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 🔗 Links

- [Main Project README](../README.md)
- [Backend API Documentation](../backend/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)

## 🤝 Contributing

When contributing to the frontend:

1. Follow React best practices and hooks patterns
2. Ensure components are reusable and well-documented
3. Test your changes across different screen sizes
4. Run `npm test` before committing
5. Follow the existing code style and naming conventions

## 📝 Notes

- The frontend expects the backend API to be running on `http://localhost:4000`
- All API calls should go through the backend server
- Environment variables can be added to a `.env` file in the frontend directory
- For production builds, make sure to update API endpoints accordingly

---

For more information about the full application, see the [main README](../README.md).
