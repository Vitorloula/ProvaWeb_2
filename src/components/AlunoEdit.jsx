import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function AlunoEdit() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [ira, setIra] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAluno = async () => {
      const response = await fetch(`http://localhost:5000/alunos/${id}`);
      const data = await response.json();
      setNome(data.nome);
      setCurso(data.curso);
      setIra(data.ira);
    };

    fetchAluno();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const aluno = { nome, curso, ira: parseFloat(ira) };

    try {
      await fetch(`http://localhost:5000/alunos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aluno),
      });
      navigate('/listar-alunos');
    } catch (error) {
      console.error('Erro ao atualizar aluno:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Editar Aluno</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCurso">
              <Form.Label>Curso</Form.Label>
              <Form.Control
                type="text"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formIra">
              <Form.Label>IRA</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={ira}
                onChange={(e) => setIra(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Atualizar Aluno
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AlunoEdit;