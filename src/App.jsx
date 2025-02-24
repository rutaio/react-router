import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Router - pagr. router komponentas
// Routes - komponentas, kuriame aprasomi visi galimi URL'ai (arba routes)
// Route - komponentas, kuris nurodo, ka rodyti, kai URL'as atitinka nurodyta kelia
import { NavBar } from './components//NavBar/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ContactsPage } from './pages/ContactPage/ContactsPage';
import { ReviewsPage } from './pages/ReviewsPage/ReviewsPage';

function App() {
  return (
    <Router>
      {/*Navigacija visada atsivaizduos, kadangi nepriklauso jokiam URL */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
