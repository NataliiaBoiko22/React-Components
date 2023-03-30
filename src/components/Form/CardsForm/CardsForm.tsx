import React from "react";
import { IUser } from "./../../types";
import { CardForm } from "../CardForm/CardForm";
import "./cardsForm.css";

interface UsersProps {
  users: IUser[];
}

export class CardsForm extends React.Component<UsersProps> {
  render() {
    const usersLayout = this.props.users.map((user, index) => (
      <CardForm user={user} key={index} />
    ));

    return <div className="cards_wrapper">{usersLayout}</div>;
  }
}
