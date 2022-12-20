import styled from "styled-components";

const NavFooter = styled.footer`
  background-color: #fff;
  position: sticky;
  bottom: 0;
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Link1 = styled.p`
  font-family: Lexend Deca;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #52b6ff;
  margin-left: 20px;
  padding-right: 20px;
`;

export { NavFooter, Link1, FooterContainer };
