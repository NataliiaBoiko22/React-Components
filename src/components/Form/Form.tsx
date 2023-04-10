import { SubmitHandler, useForm } from "react-hook-form";
import "./form.css";
import Input from "./Input/Input";
import Select from "./Select/Select";
import { IUser } from "components/types";

interface FormProps {
  addNewUser: (user: IUser) => void;
}
type TUserCard = Omit<IUser, "file"> & {
  agreement: string;
  file: FileList;
};
const Form = ({ addNewUser }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TUserCard>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      surname: "",
      birthday: "",
      duration: "",
      agreement: "",
      file: undefined,
      support: "",
    },
  });
  const onSubmit: SubmitHandler<TUserCard> = async (data: TUserCard) => {
    const newUser: IUser = {
      name: data.name,
      surname: data.surname,
      birthday: data.birthday,
      support: data.support,
      duration: data.duration,
      file: data?.file?.[0],
    };
    addNewUser(newUser);
    reset();
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Please fill in the form fields</p>
        <div className="form__row">
          <label htmlFor="name">Name:</label>

          <Input
            title=""
            type="text"
            id="name"
            placeholder="Enter first name"
            {...register("name", {
              required: "Required field",
              minLength: {
                value: 2,
                message: "Please enter at least two characters",
              },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <Input
            title=""
            placeholder="Enter last name"
            {...register("surname", {
              required: "Required field",
              minLength: {
                value: 2,
                message: "Please enter at least two characters",
              },
            })}
          />
          {errors.surname && <span>{errors.surname.message}</span>}
        </div>
        <div>
          <label htmlFor="birthday">Date of Birth:</label>
          <Input
            title=""
            type="date"
            {...register("birthday", {
              required: "Required field",
            })}
          />
          {errors.birthday && <span>{errors.birthday.message}</span>}
        </div>
        <div>
          <Select {...register("support", { required: "Required field" })} />
          {errors.support && <span>{errors.support.message}</span>}
        </div>
        <div className="form_row_radio">
          <label>Support Duration:</label>
          <div>
            <Input
              type="radio"
              className="radio"
              title="One time"
              value="One time"
              {...register("duration", {
                required: "Required field",
              })}
            />
          </div>
          <div>
            <Input
              type="radio"
              className="radio"
              title="Continuously"
              value="Continuously"
              {...register("duration", {
                required: "Required field",
              })}
            />
            {errors.duration && <span>{errors.duration.message}</span>}
          </div>
        </div>
        <div className="form_row">
          <label className="agree_desc">
            I agree to the terms and conditions
          </label>
          <Input
            title="agree"
            className="agree_checkbox"
            type="checkbox"
            {...register("agreement", {
              required: "Required field",
            })}
          />
          {errors.agreement && <span>{errors.agreement.message}</span>}
        </div>
        <div className="file_field">
          <label htmlFor="file">Upload a file:</label>
          <Input title="" type="file" accept="image/*" {...register("file")} />
          {errors.file && <span>{errors.file.message}</span>}
        </div>
        <div className="buttons">
          <button type="submit" className="submitbtn">
            Submit
          </button>
          <button type="reset" className="submitbtn">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
