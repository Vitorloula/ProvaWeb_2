import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AlunoList.css';

function AlunoList() {
  const [alunos, setAlunos] = useState([]);
  const [mediaIRA, setMediaIRA] = useState(0);
  const [colorToggle, setColorToggle] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/alunos')
      .then(response => response.json())
      .then(data => {
        setAlunos(data);
        const totalIRA = data.reduce((acc, aluno) => acc + aluno.ira, 0);
        setMediaIRA(totalIRA / data.length);
      })
      .catch(error => console.error('Erro ao buscar alunos:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/alunos/${id}`, {
      method: 'DELETE',
    })
      .then(() => setAlunos(alunos.filter(aluno => aluno.id !== id)))
      .catch(error => console.error('Erro ao deletar aluno:', error));
  };

  const toggleColors = () => {
    setColorToggle(!colorToggle);
  };

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <Button onClick={toggleColors}>Pintar</Button>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Curso</th>
            <th>IRA</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id} className={
              colorToggle
                ? aluno.ira < mediaIRA ? 'table-danger' : 'table-primary'
                : ''
            }>
              <td>{aluno.nome}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.ira}</td>
              <td>
                <Link to={`/editar-aluno/${aluno.id}`}>
                  <Button variant="warning" className="me-2">Editar</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(aluno.id)}>Deletar</Button>
              </td>
            </tr>
          ))}
          <tr className="table-warning">
            <td colSpan="2">Média IRA</td>
            <td>{mediaIRA.toFixed(2)}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AlunoList;