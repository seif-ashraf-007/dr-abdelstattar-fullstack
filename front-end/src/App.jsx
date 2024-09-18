import Home from './pages/HomePage/HomePage'
import Locations from './pages/LocationsPage/LocationsPage'
import Blog from './pages/BlogPage/Blog'

import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
    <Router>
        <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/locations' element={<Locations />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
        <Footer />
    </Router>
  )
}

export default App
