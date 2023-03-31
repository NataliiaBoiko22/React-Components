import React, { useState } from "react";
import Form from "../../Form/Form";
import CardsForm from "../../Form/CardsForm/CardsForm";
import { IUser } from "../../types";

const FormPage: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addNewUser = (newUser: IUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <>
      <Form addNewUser={addNewUser} />
      <CardsForm users={users} />
    </>
  );
};
export default FormPage;
