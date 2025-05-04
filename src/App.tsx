import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutMePage from './pages/AboutMePage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import CalculadoraPage from './pages/CalculadoraPage.tsx';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/calculadora" element={<CalculadoraPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
