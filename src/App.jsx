import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import AlunoList from './components/AlunoList';
import AlunoForm from './components/AlunoForm';
import AlunoEdit from './components/AlunoEdit';

function App() {
  return (
    <Router>
      <Navbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<h1>Bem-vindo ao Sistema de Alunos e Professores</h1>} />
          <Route path="/listar-alunos" element={<AlunoList />} />
          <Route path="/criar-aluno" element={<AlunoForm />} />
          <Route path="/editar-aluno/:id" element={<AlunoEdit />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
