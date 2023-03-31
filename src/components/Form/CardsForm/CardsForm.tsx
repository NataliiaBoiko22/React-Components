import React from "react";
import { IUser } from "./../../types";
import CardForm from "../CardForm/CardForm";
import "./cardsForm.css";

interface UsersProps {
  users: IUser[];
}

const CardsForm: React.FC<UsersProps> = ({ users }) => {
  const usersLayout = users.map((user, index) => (
    <CardForm user={user} key={index} />
  ));

  return <div className="cards_wrapper">{usersLayout}</div>;
};

export default CardsForm;
