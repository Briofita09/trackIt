import React from "react";
import { Link } from "react-router-dom";
import { NavFooter, FooterContainer, Link1 } from "./style";

function Footer() {
  return (
    <NavFooter>
      <FooterContainer>
        <Link to="/habitos" style={{ textDecoration: "none" }}>
          <Link1>Hábitos</Link1>
        </Link>
        <Link to="/historico" style={{ textDecoration: "none" }}>
          <Link1>Histórico</Link1>
        </Link>
      </FooterContainer>
    </NavFooter>
  );
}

export default Footer;
