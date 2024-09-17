import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

function AlunoGroupedByCurso() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/alunos')
      .then(response => response.json())
      .then(data => {
        setAlunos(data);
      });
  }, []);

  const agruparPorCurso = () => {
    return alunos.reduce((acc, aluno) => {
      acc[aluno.curso] = acc[aluno.curso] || [];
      acc[aluno.curso].push(aluno);
      return acc;
    }, {});
  };

  const alunosAgrupados = agruparPorCurso();

  return (
    <Container>
      <h2 className="my-4">Alunos Agrupados por Curso</h2>
      {Object.keys(alunosAgrupados).map(curso => (
        <div key={curso} className="mb-4">
          <h3>{curso}</h3>
          <Table striped bordered hover>
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>IRA</th>
              </tr>
            </thead>
            <tbody>
              {alunosAgrupados[curso].map(aluno => (
                <tr key={aluno.id}>
                  <td>{aluno.id}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.ira}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </Container>
  );
}

export default AlunoGroupedByCurso;
