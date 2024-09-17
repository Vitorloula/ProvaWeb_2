import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AlunoList.css';

function AlunoList() {
  const [alunos, setAlunos] = useState([]);
  const [mediaIRA, setMediaIRA] = useState(0);
  const [colorize, setColorize] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/alunos')
      .then(response => response.json())
      .then(data => {
        setAlunos(data);
        calcularMediaIRA(data);
      });
  }, []);

  const calcularMediaIRA = (alunos) => {
    if (alunos.length === 0) return;
    const totalIRA = alunos.reduce((acc, aluno) => acc + aluno.ira, 0);
    const media = totalIRA / alunos.length;
    setMediaIRA(media.toFixed(2));
  };

  const deletarAluno = (id) => {
    fetch(`http://localhost:5000/alunos/${id}`, { method: 'DELETE' })
      .then(() => setAlunos(alunos.filter(aluno => aluno.id !== id)));
  };

  const toggleColorize = () => {
    setColorize(!colorize);
  };

  return (
    <Container>
      <h2 className="my-4">Lista de Alunos</h2>
      <Button variant="info" onClick={toggleColorize} className="mb-3">
        {colorize ? 'Remover Colorização' : 'Colorir Alunos'}
      </Button>
      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>IRA</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id}
              className={
                colorize
                  ? aluno.ira < mediaIRA ? 'table-danger' : 'table-primary'
                  : ''
              }>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.ira}</td>
              <td>
                <Button as={Link} to={`/editar-aluno/${aluno.id}`} variant="primary" size="sm">Editar</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => deletarAluno(aluno.id)}>Deletar</Button>
              </td>
            </tr>
          ))}
          <tr className="bg-warning">
            <td colSpan="3"><strong>Média do IRA</strong></td>
            <td colSpan="2"><strong>{mediaIRA}</strong></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default AlunoList;
