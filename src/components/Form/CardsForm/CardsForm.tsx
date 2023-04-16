import { useAppSelector } from "../../../redux/hooks";
import CardForm from "../CardForm/CardForm";
import "./cardsForm.css";

const CardsForm = () => {
  const { users } = useAppSelector((state) => state.formReducer);
  const usersLayout = users.map((user, index) => (
    <CardForm user={user} key={index} />
  ));

  return <div className="cards_wrapper">{usersLayout}</div>;
};

export default CardsForm;
