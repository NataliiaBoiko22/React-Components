import { IUser } from "../../types";
import "./cardForm.css";
interface UserProps {
  user: IUser;
}

const CardForm = ({ user }: UserProps) => {
  const { name, surname, birthday, support, duration, file } = user;
  const imgSrc = file ? URL.createObjectURL(file) : "";

  return (
    <article className="wrapper">
      <section className="wrapper_img">
        <img src={imgSrc} alt={name} />
      </section>
      <section>
        <h3>
          {name} {surname}
        </h3>
        <p>Birthday: {birthday?.toString()}</p>
        <p>Type of support: {support}</p>
        <p>Duration of support: {duration}</p>
      </section>
    </article>
  );
};

export default CardForm;
