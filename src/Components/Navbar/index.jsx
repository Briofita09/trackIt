import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Image1, Image2 } from "./style";
import logo from "../../assets/imgs/TrackIt.png";
import AppContext from "../../AppContext/Context";

function Navbar() {
  const { token } = useContext(AppContext);
  return (
    <div>
      <Container>
        <Link to="/hoje">
          <Image1 src={logo} alt="TrackIt" />
        </Link>
        <Image2 src={token.image} alt="imagem de perfil" />
      </Container>
    </div>
  );
}

export default Navbar;
