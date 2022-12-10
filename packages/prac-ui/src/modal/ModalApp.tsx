import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "./Modal";

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});

const Button = styled.button({
  width: "280px",
  height: "60px",
  borderRadius: "12px",
  color: "#fff",
  backgroundColor: "#3d6afe",
  margin: 0,
  border: "none",
  fontSize: "24px",
  "&:active": {
    opacity: "0.8",
  },
});
const ModalBody = styled.div({
  borderRadius: "8px",
  boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1)",
  background: "#fff",
  maxHeight: "calc(100vh - 16px)",
  overflow: "hidden auto",
  position: "relative",
  paddingBlock: "12px",
  paddingInline: "24px",
});

const ModalApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <Container>
      <Button onClick={handleOpen}>OPEN</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalBody>
          <h2>Title</h2>
          <p>Description</p>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default ModalApp;
