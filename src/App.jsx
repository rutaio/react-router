import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Router - pagr. router komponentas
// Routes - komponentas, kuriame aprasomi visi galimi URL'ai (arba routes)
// Route - komponentas, kuris nurodo, ka rodyti, kai URL'as atitinka nurodyta kelia
import { WelcomeMessage } from './components/WelcomeMessage';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';

//  / - homepage
// /about - About page
// /contacts - Contact page

function App() {
  return (
    <Router>
      {/*Navigacija visada atsivaizduos, kadangi nepriklauso jokiam URL */}
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomeMessage message={<HomePage />} />} />
        <Route
          path="/about"
          element={<WelcomeMessage message={<AboutPage />} />}
        />
        <Route
          path="/contacts"
          element={<WelcomeMessage message={'Esu kontaktu puslapis'} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
