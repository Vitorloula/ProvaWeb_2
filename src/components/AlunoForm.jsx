import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AlunoForm() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [ira, setIra] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const aluno = { nome, curso, ira: parseFloat(ira) };

    try {
      await fetch('http://localhost:5000/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aluno),
      });
      navigate('/listar-alunos');
    } catch (error) {
      console.error('Erro ao criar aluno:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Criar Novo Aluno</h2>
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
              Criar Aluno
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AlunoForm;