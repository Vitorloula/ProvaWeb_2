import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import AlunoList from './components/AlunoList';
import AlunoForm from './components/AlunoForm';
import AlunoEdit from './components/AlunoEdit';
import AlunoGroupedByCurso from './components/AlunoGroupedByCurso';

function App() {
  return (
    <Router>
      {/* Navbar permanece no topo em todas as rotas */}
      <Navbar />

      {/* Container para centralizar e dar espaçamento aos conteúdos das páginas */}
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<h1 className="text-center">Bem-vindo ao Sistema de Alunos</h1>} />
          <Route path="/listar-alunos" element={<AlunoList />} />
          <Route path="/criar-aluno" element={<AlunoForm />} />
          <Route path="/editar-aluno/:id" element={<AlunoEdit />} />
          <Route path="/alunos-por-curso" element={<AlunoGroupedByCurso />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
