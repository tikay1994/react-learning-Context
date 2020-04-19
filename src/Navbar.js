import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { CartContext } from "./CartProvider";
const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Market 4.0</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Products/">Products</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <CartContext.Consumer>
                  {({ cartItems }) => (
                    <Link to="/Products/">Cart ({cartItems.length})</Link>
                  )}
                </CartContext.Consumer>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
