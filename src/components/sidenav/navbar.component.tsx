import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

const NavBar: React.FC = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Characters">Characters</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Episodes">Episodes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="Search" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default NavBar;
