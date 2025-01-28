import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route */}
        {/* You can either replace <Home /> with an existing component or remove this */}
        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <div>Home Page Content</div> {/* Placeholder for Home page content */}
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
