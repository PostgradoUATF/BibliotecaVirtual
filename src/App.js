import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PaginaDiplomados from './pages/diplomados';
import PaginaMaestrias from './pages/maestrias';
import PaginaDoctorados from './pages/doctorados';
import PaginaEspecialidades from './pages/especialidades';
import Navegador from './components/navegador/navegador';
import MenuAside from './components/Aside/Aside';
import Login from './pages/login';
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <div className="container d-flex justify-content-end p-3">
          <Navegador/>
        </div>
        <div className="container d-flex justify-content">
          <MenuAside />
          <Routes>
            <Route path="/login" exact element={<Login />}/>
            <Route path="/" exact element={<PaginaDiplomados />}/>
            <Route path="/diplomados" exact element={<PaginaDiplomados />}/>
            <Route path="/maestrias" exact element={<PaginaMaestrias />}/>
            <Route path="/doctorados" exact element={<PaginaDoctorados />}/>
            <Route path="/especialidades" exact element={<PaginaEspecialidades />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
