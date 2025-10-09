# Workout Buddy - MERN Application

A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) for tracking workouts and fitness goals.

## 🚀 Features

- User authentication and authorization
- Create, read, update, and delete workouts
- Track exercise routines and progress
- Responsive design for desktop and mobile
- RESTful API backend
- Modern React frontend with hooks

## 🛠️ Tech Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **Create React App** - Development environment and build tools
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling library

## 📁 Project Structure

```
MERN-application/
├── frontend/           # React frontend application
│   ├── public/
│   ├── src/
│   └── package.json
├── backend/            # Node.js/Express backend API
│   ├── controllers/    # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── server.js       # Main server file
│   └── package.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LuiRo07/workout-buddy.git
   cd MERN-application
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   - Create a `.env` file in the backend directory
   - Add your environment variables:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The API will run on `http://localhost:4000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```
   The React app will run on `http://localhost:3000`

## 📚 API Endpoints

### Workouts
- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:id` - Get a single workout
- `POST /api/workouts` - Create a new workout 
- `PATCH /api/workouts/:id` - Update a workout
- `DELETE /api/workouts/:id` - Delete a workout

### Authentication
- `POST /api/user/signup` - User registration
- `POST /api/user/login` - User login

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test
```

### Backend Testing
```bash
cd backend
npm test
```

## 🏗️ Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Production
```bash
cd backend
npm run build
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Luis Rosas** - [LuiRo07](https://github.com/LuiRo07)

## 🔗 Links

- [Repository](https://github.com/LuiRo07/workout-buddy)
- [Live Demo](your-deployed-app-url)

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact me directly.

---

⭐ If you found this project helpful, please give it a star!