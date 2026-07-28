import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AtlasPage from './pages/AtlasPage';
import RegistroPage from './pages/RegistroPage';
import LaboratorioPage from './pages/LaboratorioPage';
import ExperienciasPage from './pages/ExperienciasPage';
import VersoDeRokhaPage from './pages/VersoDeRokhaPage';
import RaicesDelMaulePage from './pages/RaicesDelMaulePage';
import TerritoriosResonantesProyectoPage from './pages/TerritoriosResonantesProyectoPage';
import MemoriasDeLicantenPage from './pages/MemoriasDeLicantenPage';
import AtlasSonoroPage from './pages/AtlasSonoroPage';
import CCRPage from './pages/CCRPage';
import CCRAuroritaReportajePage from './pages/CCRAuroritaReportajePage';
import ColaboraPage from './pages/ColaboraPage';
import BitacoraPage from './pages/BitacoraPage';
import ColaboracionesPage from './pages/ColaboracionesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/atlas" element={<AtlasPage />} />
                <Route path="/atlas/registro/:slug" element={<RegistroPage />} />
                <Route path="/laboratorio" element={<LaboratorioPage />} />
                <Route path="/experiencias" element={<ExperienciasPage />} />
                <Route path="/verso-de-rokha" element={<VersoDeRokhaPage />} />
                <Route path="/raices-del-maule" element={<RaicesDelMaulePage />} />
                <Route path="/territorios-resonantes" element={<TerritoriosResonantesProyectoPage />} />
                <Route path="/memorias-de-licanten" element={<MemoriasDeLicantenPage />} />
                <Route path="/museo/atlas-sonoro" element={<AtlasSonoroPage />} />
                <Route path="/ccr" element={<CCRPage />} />
                <Route path="/ccr/trabajos-previos/aurorita-ramos-taller-adulto-mayor" element={<CCRAuroritaReportajePage />} />
                <Route path="/colabora" element={<ColaboraPage />} />
                <Route path="/bitacora" element={<BitacoraPage />} />
                <Route path="/colaboraciones" element={<ColaboracionesPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
