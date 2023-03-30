import React from "react";
import { FormState, IUser } from "../types";
import "./form.css";
import Input from "../Form/Input/Input";
import Select from "../Form/Select/Select";
import moment from "moment";
interface FormProps {
  addNewUser: (user: IUser) => void;
}

export default class Form extends React.Component<FormProps, FormState> {
  form: React.RefObject<HTMLFormElement>;
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthday: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  radioOneTime: React.RefObject<HTMLInputElement>;
  radioContinuously: React.RefObject<HTMLInputElement>;
  agreement: React.RefObject<HTMLInputElement>;
  support: React.RefObject<HTMLSelectElement>;
  constructor(props: FormProps) {
    super(props);

    this.form = React.createRef();
    this.name = React.createRef();
    this.surname = React.createRef();
    this.birthday = React.createRef();
    this.file = React.createRef();
    this.radioOneTime = React.createRef();
    this.radioContinuously = React.createRef();
    this.agreement = React.createRef();
    this.support = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      nameError: null,
      surnameError: null,
      birthdayError: "",
      durationError: null,
      supportError: null,
      agreementError: null,
      fileError: null,
      isSaved: false,
    };
  }
  startsWithCapital(word: string): boolean {
    return word.charAt(0) !== word.charAt(0).toUpperCase();
  }
  validateText = (refValue: string, stateProp: string) => {
    let error = "";
    const regex = /^[ \d]+/;

    if (refValue.length < 2 || refValue.length > 10)
      error = "Must contain 2-10 characters";

    if (refValue && this.startsWithCapital(refValue)) {
      error = "First letter must be capitalized";
    }
    if (regex.test(refValue)) {
      error = "Invalid input";
    }

    if (!refValue) error = "Required field";

    this.setState((prevState) => ({
      ...prevState,
      [stateProp]: error,
    }));

    return !!error;
  };

  validateBirthday() {
    if (this.birthday.current !== null) {
      const birthday = moment(this.birthday.current.value);
      const age = moment().diff(birthday, "years");
      if (age < 14) {
        this.setState({ birthdayError: "You must be at least 14 years old" });
        return false;
      } else {
        this.setState({ birthdayError: "" });
        return true;
      }
    }
  }

  validateRequired = (refValue: string | boolean | null, stateProp: string) => {
    let error = "";
    if (!refValue) error = "Required field";

    this.setState((prevState) => ({
      ...prevState,
      [stateProp]: error,
    }));

    return !!error;
  };
  validateFile = (refValue: Blob | undefined, prop: string) => {
    let error = "";

    if (!refValue?.type.includes("image")) error = "Must be an image";

    if (!refValue) error = "Required field";
    this.setState((prevState) => ({
      ...prevState,
      [prop]: error,
    }));
    return !!error;
  };
  getDuration = (
    durationRefArray: React.RefObject<HTMLInputElement>[]
  ): string | null => {
    let duration = null;

    durationRefArray.forEach((durationEl) => {
      if (durationEl.current?.checked) {
        duration = durationEl.current.value;
      }
    });

    return duration;
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { addNewUser } = this.props;
    const name = this.name.current?.value || "";
    const surname = this.surname.current?.value || "";
    const birthday = this.birthday.current?.value || "";
    const support = this.support.current?.value || "";
    const agreement = this.agreement.current?.checked || false;
    const duration: string | null = this.getDuration([
      this.radioOneTime,
      this.radioContinuously,
    ]);
    const file = this.file.current?.files?.[0];

    const validateForm = [
      this.validateText(name, "nameError"),
      this.validateText(surname, "surnameError"),
      this.validateBirthday(),
      this.validateRequired(birthday, "birthdayError"),
      this.validateRequired(agreement, "agreementError"),
      this.validateRequired(support, "supportError"),
      this.validateRequired(duration, "durationError"),
      this.validateFile(file, "fileError"),
    ].includes(true);

    if (!validateForm) {
      const newUser = {
        name,
        surname,
        birthday,
        support,
        duration,
        file,
      };
      addNewUser(newUser);
      this.setState({ isSaved: true });
      setTimeout(() => {
        this.setState({ isSaved: false });
      }, 2000);
      this.form.current?.reset();
    }
  };

  render(): React.ReactNode {
    const { isSaved } = this.state;
    return (
      <div className="form-wrapper">
        <form className="form" onSubmit={this.handleSubmit} ref={this.form}>
          <p className="title">Please fill in the form fields</p>
          <div className="form__row">
            {this.state.nameError && (
              <span className="error">{this.state.nameError}</span>
            )}
            <Input
              title="First Name:"
              placeholder="Enter first name"
              ref={this.name}
            />
            {this.state.surnameError && (
              <span className="error">{this.state.surnameError}</span>
            )}
            <Input
              title="Last Name:"
              placeholder="Enter last name"
              ref={this.surname}
            />
          </div>
          {this.state.birthdayError && (
            <span className="error">{this.state.birthdayError}</span>
          )}
          <Input
            title="Birthday date:"
            type="date"
            ref={this.birthday}
            onBlur={this.validateBirthday.bind(this)}
          />
          {this.state.supportError && (
            <span className="error">{this.state.supportError}</span>
          )}
          <Select ref={this.support} errorMess={this.state.supportError} />
          <div className="form_row_radio">
            <p className="agree_desc"> Choose a duration of support: </p>
            {this.state.durationError && (
              <span className="error">{this.state.durationError}</span>
            )}

            <Input
              className="radio"
              type="radio"
              title="One time"
              name="duration"
              value="one time"
              ref={this.radioOneTime}
            />
            <Input
              type="radio"
              className="radio"
              title="Сontinuously"
              name="duration"
              value="сontinuously"
              ref={this.radioContinuously}
            />
          </div>
          <div>
            {this.state.fileError && (
              <span className="error">{this.state.fileError}</span>
            )}
            <Input
              title="Choose your image:"
              type="file"
              className="file_input"
              ref={this.file}
            />
          </div>
          <div className="form_row">
            <p className="agree_desc">
              Consent to the processing of your data:
            </p>
            {this.state.agreementError && (
              <span className="error">{this.state.agreementError}</span>
            )}
            <Input
              className="agree_checkbox"
              title="agree"
              type="checkbox"
              ref={this.agreement}
            />
          </div>
          <div className="buttons">
            <button type="submit" className="submitbtn">
              Submit
            </button>
            <button type="reset" className="submitbtn">
              Reset
            </button>
          </div>
          {isSaved && <span>The data has been saved</span>}
        </form>
      </div>
    );
  }
}
