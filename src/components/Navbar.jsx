import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../NavBar.css';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <BootstrapNavbar.Brand as={Link} to="/">
        Sistema de Alunos
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
      <BootstrapNavbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/listar-alunos">Listar Alunos</Nav.Link>
          <Nav.Link as={Link} to="/criar-aluno">Criar Aluno</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;
