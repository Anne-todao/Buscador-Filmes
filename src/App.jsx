import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar"
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { MovieDetails } from './pages/MovieDetails'


function App() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<MovieDetails />} />
                <Route path="/favoritos" element={<Favorites />} />
            </Routes>
        </Router>
    );
}

export default App;
