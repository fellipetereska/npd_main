import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

// Importante as Paginas
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Projetos from './components/pages/Projetos';
import Noticias from './components/pages/Noticias';

// Importando os Componentes
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


//Função Principal
function App() {
  return (
    <>
        <Router>
          {/* Menu */}
          <Navbar />
          {/* Definindo quais serão as rotas */}
          <Routes>
            {/* Linkando as rotas as paginas */}
            {/* Menu */}
            <Route path='/' element={<Home />}/>
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/projetos' element={<Projetos />}/>
            <Route path='/noticias' element={<Noticias />}/>
          </Routes>
          {/* Rodapé */}
          <Footer />
        </Router>

        {/* Mensagem */}
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
    </>
  );
}

export default App;
