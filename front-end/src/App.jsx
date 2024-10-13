import Home from './pages/HomePage/HomePage';
import Locations from './pages/LocationsPage/LocationsPage';
import Blog from './pages/BlogPage/Blog';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login/Login';

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
        window.location.href = '/login';
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

                <Route
                    path="/login"
                    element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
                />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
