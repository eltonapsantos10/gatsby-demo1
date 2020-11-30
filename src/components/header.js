import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header>
    <br></br>
    <Navbar bg="primary" expand="md" fixed="top">
    <Navbar.Brand href="/"><img src="https://img.icons8.com/dotty/50/000000/black-panther-mask.png"/>{siteTitle}</Navbar.Brand> 
    <Navbar.Toggle aria-controls="navbarResponsive"/>     
    <Navbar.Collapse id="navbarResponsive">
    <Nav className="ml-auto">
      <Nav as="ul">
        <Nav.Item as="li" >
        <Link to="/page-2" className="nav-link" activeClassName="active"><p id="nav-name">Filmes</p></Link>
        <Link to="/page-3" className="nav-link" activeClassName="active"><p id="nav-name">Cartaz</p></Link>
        <Link to="/page-4" className="nav-link" activeClassName="active"><p id="nav-name">Produtos</p></Link>
        <Link to="/page-5" className="nav-link" activeClassName="active"><p id="nav-name">Contatos</p></Link>
        </Nav.Item>
      </Nav>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
