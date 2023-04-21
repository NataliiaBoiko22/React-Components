// import { useAppSelector } from "../../../redux/hooks";
import { CardForm } from "../CardForm/CardForm";
import "./cardsForm.css";
// import { formReducer } from "../../../redux/formSlice";
// import { addUserCard } from "redux/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import React from "react";
// const dispatch = useDispatch();

export const CardsForm = () => {
  const curState = useSelector((state: RootState) => state.curState);

  // const { users } = useAppSelector((state) => state.addUserCard);
  const usersLayout = curState.userCards.map((user, index) => (
    <CardForm user={user} key={index} />
  ));

  return <div className="cards_wrapper">{usersLayout}</div>;
};
