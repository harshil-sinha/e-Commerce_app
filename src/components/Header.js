import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BiCart} from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";


const Header = () => {

    const {
        isEmpty,
        totalItems,
    } = useCart();

    return (
        <Navbar collapseOnSelect expand="md"
                
                className={'bg-light-black border-bottom bg-light border-bottom'}
                style={{ width: '100%', position: 'fixed', zIndex: 100}}
        >
        <Container>
          <Link to="/">
            <Navbar.Brand className={'text-dark-primarytext-light-primary'}>
                <b>Shopping Adda</b>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link to="/">
            <Nav.Link href="#home" className='mt-1'>Home</Nav.Link>
            </Link>
            {/* <Link to="MyAbout.js" className={`nav-link 'text-dark-primary': 'text-light-primary'} mt-1`}>
                  <VscAccount size="1.8rem"/>
                  &nbsp;About
              </Link> */}
            <Link to="my-account" className={`nav-link 'text-dark-primary': 'text-light-primary'} mt-1`}>
                  <VscAccount size="1.8rem"/>
                  &nbsp;Store
              </Link>
              <Link
                to="/cart"
                className={` 'text-dark-primary': 'text-light-primary'} d-flex align-items-center`}
              >
                <BiCart size="2rem"/>
                {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>}
                <span style={{ marginLeft: !isEmpty ? '-13px': 0}}>&nbsp;Cart</span>
              </Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;