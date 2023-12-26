//Компонент Navbar
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
        <Navbar expand="md" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/"> 
                <img
                src="https://clipart-library.com/images_k/spiderman-symbol-transparent/spiderman-symbol-transparent-6.png"
                //  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                 alt="logo"
                 width="50"
                 height="50"
                 className="d-inline-block align-top"
                 />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav><Link to="/" className="nav-link" id="RouterNavLink" >Home</Link></Nav>
              <Nav><Link to="/about" className="nav-link" id="RouterNavLink">About</Link></Nav>
              <Nav><Link to="/blog" className="nav-link" id="RouterNavLink">Blog</Link></Nav>
              <Nav><Link to="/contacts" className="nav-link" id="RouterNavLink">Contacts</Link></Nav>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
};

export default Header;