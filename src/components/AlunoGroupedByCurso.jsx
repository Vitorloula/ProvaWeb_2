import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';

function AlunoGroupedByCurso() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/alunos')
      .then(response => response.json())
      .then(data => {
        setAlunos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar alunos:', error);
        setLoading(false);
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
      <h2 className="my-4 text-center">Alunos Agrupados por Curso</h2>

      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
          <p>Carregando alunos...</p>
        </div>
      ) : alunos.length === 0 ? (
        <Alert variant="warning">Nenhum aluno encontrado!</Alert>
      ) : (
        Object.keys(alunosAgrupados).map(curso => (
          <div key={curso} className="mb-5">
            <h3 className="mb-3">{curso}</h3>
            <Table bordered hover className="table-fixed">
              <thead className="table-dark">
                <tr>
                  <th style={{ width: '10%' }}>ID</th>
                  <th style={{ width: '60%' }}>Nome</th>
                  <th style={{ width: '30%' }}>IRA</th>
                </tr>
              </thead>
              <tbody>
                {alunosAgrupados[curso].map(aluno => (
                  <tr
                    key={aluno.id}
                    className= {
                      aluno.ira >= 7 ? 'table-success ' : ' '
                    }
                  >
                    <td>{aluno.id}</td>
                    <td>{aluno.nome}</td>
                    <td>{aluno.ira}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))
      )}
    </Container>
  );
}

export default AlunoGroupedByCurso;
