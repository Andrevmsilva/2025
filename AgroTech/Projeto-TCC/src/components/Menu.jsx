import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import styles from "./Menu.module.css";

export default function Topo() {
  return (
    <div className={styles.principal}>
      <Navbar expand="lg" className={styles.navbar}>
        <Container fluid className={styles.conteiner} style={{ color: "white" }}>
          <Navbar.Brand href="#home" className={styles.titulo}>
            <span style={{ color: "white", marginRight: "20px" }}>AgroTech</span>
          </Navbar.Brand>

          {/* Botão no canto direito */}
          <Navbar.Toggle
            aria-controls="menu-responsivo"
            style={{ marginLeft: "auto" }}
          />

          <Navbar.Collapse id="menu-responsivo">
            <Nav className="ms-auto">
              <NavDropdown
                title={
                  <span style={{ color: "white", marginLeft: "20px" }}>
                    Categorias
                  </span>
                }
                className={styles.itens}
              >
                <NavDropdown.Item href="#action/3.1">Serviços</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Maquinário / Peças</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Produtos</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                className={styles.itens}
                style={{ color: "white", marginLeft: "20px" }}
                href="#vender"
              >
                Vender
              </Nav.Link>
              <Nav.Link
                className={styles.itens}
                style={{ color: "white", marginLeft: "20px" }}
                href="#contato"
              >
                Contato
              </Nav.Link>
              <Nav.Link
                className={styles.itens}
                style={{ color: "white", marginLeft: "20px" }}
                href="#conta"
              >
                Conta
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
