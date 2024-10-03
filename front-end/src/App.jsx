import Home from './pages/HomePage/HomePage';
import Locations from './pages/LocationsPage/LocationsPage';
import Blog from './pages/BlogPage/Blog';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedInToken = localStorage.getItem('isLoggedIn');
        if (isLoggedInToken) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/blog" element={<Blog />} />

                {/* Redirect from /login to /dashboard if already logged in */}
                <Route
                    path="/login"
                    element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
                />

                {/* Redirect to /login if not logged in when accessing /dashboard */}
                <Route
                    path="/dashboard"
                    element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
                />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
