import { React, useState } from "react";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import logo from "../../assets/imgs/logo.png";
import { Input, Form, Button, Paragraph, Image } from "./style";
import Loading from "../../Components/Loading";
import { Link } from "react-router-dom";

function Singup() {
  const [open, setOpen] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);
  const [enable, setEnable] = useState(!true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onOpenModalFailure = () => setOpenFailure(true);
  const onCloseModalFailure = () => setOpenFailure(false);
  const user = {
    email,
    password,
    name,
    image,
  };
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setEnable(true);
      const response = await axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        user
      );
      if (response.status === 201) {
        onOpenModal();
      } else if (response.status === 409) {
        onOpenModalFailure();
      } else {
        alert("Não foi possível cadastrar seu usuário, verifique os dados");
      }
      setEnable(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <Image src={logo} />
      </div>
      <Form onSubmit={handleSubmit}>
        <Input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={enable ? "disabled" : ""}
        />
        <Input
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          disabled={enable ? "disabled" : ""}
        />
        <Input
          value={name}
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
          disabled={enable ? "disabled" : ""}
        />
        <Input
          value={image}
          placeholder="foto"
          onChange={(e) => setImage(e.target.value)}
          disabled={enable ? "disabled" : ""}
        />
        <Button onClick={handleSubmit} disabled={enable ? "disabled" : ""}>
          {enable ? <Loading /> : "Cadastrar"}
        </Button>
      </Form>
      <Modal open={openFailure} onClose={onCloseModalFailure} center>
        <p>
          <br />
          Usuário já cadastrado
        </p>
      </Modal>
      <Modal open={open} onClose={onCloseModal} center>
        <p>
          <br />
          Obrigado por se cadastrar no TrackIt!
        </p>
      </Modal>
      <Link to="/">
        <Paragraph>Já tem uma conta? Faça login!</Paragraph>
      </Link>
    </div>
  );
}

export default Singup;
