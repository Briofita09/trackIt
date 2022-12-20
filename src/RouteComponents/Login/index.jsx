import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import Loading from "../../Components/Loading";
import { MainContainer, Image, Input, Form, Button, Paragraph } from "./style";

import logo from "../../assets/imgs/logo.png";
import AppContext from "../../AppContext/Context";

function Login() {
  const { setToken } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [enable, setEnable] = useState(!true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const user = {
    email,
    password,
  };

  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setEnable(true);
      const response = await axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        user
      );
      setToken(response.data);
      navigate("/hoje");
      setEnable(false);
    } catch (err) {
      onOpenModal();
      setEnable(false);
    }
  }

  return (
    <MainContainer>
      <div>
        <Image src={logo} alt="logo trackit" />
      </div>
      <Form onSubmit={handleSubmit}>
        <Input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={enable ? "disabled" : ""}
        />
        <Input
          type="password"
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          disabled={enable ? "disabled" : ""}
        />
        <Button onClick={handleSubmit} disabled={enable ? "disabled" : ""}>
          {enable ? <Loading /> : "Entrar"}
        </Button>
      </Form>
      <Modal open={open} onClose={onCloseModal} center>
        <p>
          <br />
          Usuario e/ou senha inválidos!
        </p>
      </Modal>
      <Link to="/cadastro">
        <Paragraph>Não tem uma conta? Faça o cadastro!</Paragraph>
      </Link>
    </MainContainer>
  );
}
export default Login;
