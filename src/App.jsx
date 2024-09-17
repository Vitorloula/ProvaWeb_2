import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AlunoList from './components/AlunoList';
import AlunoForm from './components/AlunoForm';
import AlunoGroupedByCurso from './components/AlunoGroupedByCurso';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/listar-alunos" element={<AlunoList />} />
        <Route path="/criar-aluno" element={<AlunoForm />} />
        <Route path="/alunos-por-curso" element={<AlunoGroupedByCurso />} />
      </Routes>
    </Router>
  );
}

export default App;
