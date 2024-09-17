import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../NavBar.css';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sistema de Alunos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Alunos" id="nav-dropdown-alunos">
              <NavDropdown.Item as={Link} to="/listar-alunos">Listar Alunos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/criar-aluno">Criar Aluno</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/alunos-por-curso">Alunos por Curso</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
