import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

function AlunoList() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/alunos')
      .then(response => response.json())
      .then(data => setAlunos(data))
      .catch(error => console.error('Erro ao buscar alunos:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/alunos/${id}`, {
      method: 'DELETE',
    })
      .then(() => setAlunos(alunos.filter(aluno => aluno.id !== id)))
      .catch(error => console.error('Erro ao deletar aluno:', error));
  };

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <Table striped bordered hover>
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
            <tr key={aluno.id}>
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
        </tbody>
      </Table>
    </div>
  );
}

export default AlunoList;
