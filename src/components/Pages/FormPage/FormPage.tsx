import React from "react";
import Form from "../../Form/Form";
import CardsForm from "../../Form/CardsForm/CardsForm";
import Header from "../Header/Header";

const FormPage: React.FC = () => {
  return (
    <>
      <Header />
      <Form />
      <CardsForm />
    </>
  );
};
export default FormPage;
