import { Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <Container>
      <Nav variant="pills" className="flex-column">
        <NavDropdown title="Alunos" id="nav-dropdown-alunos">
          <NavDropdown.Item as={Link} to="/listar-alunos">Listar Alunos</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/criar-aluno">Criar Aluno</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/alunos-por-curso">Alunos por Curso</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Professores" id="nav-dropdown-professores">
          <NavDropdown.Item as={Link} to="/listar-professores">Listar Professores</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/criar-professor">Criar Professor</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  );
}

export default Navbar;
