// import React from "react";
// import { IUser } from "../../types";
// import "./cardForm.css";

// interface UserProps {
//   user: IUser;
// }

// export class CardForm extends React.Component<UserProps> {
//   render() {
//     const { name, surname, birthday, support, duration, file } =
//       this.props.user;
//     const imgSrc = file ? URL.createObjectURL(file) : "";

//     return (
//       <article className="wrapper">
//         <section className="wrapper_img">
//           <img src={imgSrc} alt={name} />
//         </section>
//         <section>
//           <h3>
//             {name} {surname}
//           </h3>
//           <p>Birthday: {birthday?.toString()}</p>
//           <p>Type of support: {support}</p>
//           <p>Duration of support: {duration}</p>
//         </section>
//       </article>
//     );
//   }
// }
import React from "react";
import { IUser } from "../../types";
import "./cardForm.css";

interface UserProps {
  user: IUser;
}

const CardForm: React.FC<UserProps> = (user) => {
  const { name, surname, birthday, support, duration, file } = user.user;
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
