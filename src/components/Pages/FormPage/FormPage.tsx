import React from "react";
import Form from "../../Form/Form";
import { CardsForm } from "../../Form/CardsForm/CardsForm";
import { IUser } from "../../types";

interface IState {
  users: IUser[];
}

export default class FormPage extends React.Component<
  Record<string, never>,
  IState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      users: [],
    };
  }
  addNewUser = (newUser: IUser) => {
    this.setState((prevState) => {
      return { ...prevState, users: [...prevState.users, newUser] };
    });
  };
  render(): React.ReactNode {
    return (
      <>
        <Form addNewUser={this.addNewUser} />
        <CardsForm users={this.state.users} />
      </>
    );
  }
}
