import React, { useRef, useState, useEffect } from "react";
import moment from "moment";
import "./form.css";
import Input from "./Input/Input";
import Select from "./Select/Select";
import { IUser } from "../types";
import { RefObject } from "react";
interface FormProps {
  addNewUser: (user: IUser) => void;
}

const Form: React.FC<FormProps> = ({ addNewUser }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    nameError: "",
    surnameError: "",
    birthdayError: "",
    supportError: "",
    durationError: "",
    agreementError: "",
    fileError: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const surname = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const support = useRef<HTMLSelectElement>(null);
  const agreement = useRef<HTMLInputElement>(null);
  const radioOneTime = useRef<HTMLInputElement>(null);
  const radioContinuously = useRef<HTMLInputElement>(null);
  const file = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSaved(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isSaved]);

  const validateText = (value: string, fieldName: string) => {
    const namePattern = /^[a-zA-Zа-яА-Я\s]{2,}$/;
    if (!namePattern.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "Please enter at least two characters",
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
      return true;
    }
  };

  const validateBirthday = (value: string, fieldName: string) => {
    if (birthday.current === null) {
      return false;
    }
    const birthDate = moment(birthday.current.value);
    const age = moment().diff(birthDate, "years");
    if (age < 14) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "You must be at least 14 years old",
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
      return true;
    }
  };
  const validateRequired = (value: string, fieldName: string) => {
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "This field is required",
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
      return true;
    }
  };

  const validateFile = (value: string, fieldName: string) => {
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "You should upload file ",
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
      return true;
    }
  };

  const getDuration = (durationRefArray: RefObject<HTMLInputElement>[]) => {
    let duration = " ";

    durationRefArray.forEach((durationEl) => {
      if (durationEl.current?.checked) {
        duration = durationEl.current.value;
      }
    });

    return duration;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = name.current?.value || "";
    const surnameValue = surname.current?.value || "";
    const birthdayValue = birthday.current?.value || "";
    const supportValue = support.current?.value || "";
    const agreementValue = agreement.current?.checked || false;
    const durationValue = getDuration([radioOneTime, radioContinuously]);

    let isFormValid = true;

    isFormValid = validateText(nameValue, "nameError") && isFormValid;
    isFormValid = validateText(surnameValue, "surnameError") && isFormValid;
    isFormValid =
      validateBirthday(birthdayValue, "birthdayError") && isFormValid;
    isFormValid = validateRequired(supportValue, "supportError") && isFormValid;
    isFormValid =
      validateRequired(durationValue, "durationError") && isFormValid;
    isFormValid =
      validateRequired(agreementValue.toString(), "agreementError") &&
      isFormValid;
    const fileValue = file.current?.files?.[0];
    const fileName = fileValue ? fileValue.name : "";
    isFormValid = validateFile(fileName, "fileError") && isFormValid;

    if (!isFormValid) {
      console.log("notisvalid");
      return;
    }
    if (form.current instanceof HTMLFormElement) {
      const newUser: IUser = {
        name: nameValue,
        surname: surnameValue,
        birthday: birthdayValue,
        file: fileValue,
        support: supportValue,
        duration: durationValue,
        agreement: agreementValue,
      };
      addNewUser(newUser);
      setIsSaved(true);
      form.current?.reset();
      console.log("thisisconsole");
    }
  };
  return (
    <div className="form-wrapper">
      <form className="form" ref={form} onSubmit={handleSubmit}>
        <p className="title">Please fill in the form fields</p>
        <div className="form__row">
          <label htmlFor="name">Name:</label>
          <br />
          {errors.nameError && (
            <span className="error">{errors.nameError}</span>
          )}
          <Input title="" type="text" id="name" name="name" ref={name} />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <br />
          {errors.surnameError && (
            <span className="error">{errors.surnameError}</span>
          )}
          <Input
            title=""
            type="text"
            id="surname"
            name="surname"
            ref={surname}
          />
        </div>
        <div>
          <label htmlFor="birthday">Date of Birth:</label>
          <br />
          {errors.birthdayError && (
            <span className="error">{errors.birthdayError}</span>
          )}
          <Input
            title=""
            type="date"
            id="birthday"
            name="birthday"
            ref={birthday}
          />
        </div>
        <div>
          {errors.supportError && (
            <span className="error">{errors.supportError}</span>
          )}
          <Select id="support" name="support" ref={support} />
        </div>
        <div className="form_row_radio">
          <label>Support Duration:</label>
          <br />
          {errors.durationError && (
            <span className="error">{errors.durationError}</span>
          )}
          <div>
            <Input
              title=""
              type="radio"
              id="one-time"
              name="duration"
              value="One-Time"
              ref={radioOneTime}
              className="radio"
            />
            <label htmlFor="one-time">One-Time</label>
          </div>
          <div>
            <Input
              title=""
              type="radio"
              id="continuously"
              name="duration"
              value="Continuously"
              ref={radioContinuously}
              className="radio"
            />
            <label htmlFor="continuously">Continuously</label>
          </div>
        </div>
        <div className="form_row">
          <label className="agree_desc">
            I agree to the terms and conditions
          </label>
          <br />
          {errors.agreementError && (
            <span className="error">{errors.agreementError}</span>
          )}
          <Input
            className="agree_checkbox"
            title=""
            type="checkbox"
            id="agreement"
            name="agreement"
            ref={agreement}
          />
        </div>
        <div className="file_field">
          <label htmlFor="file">Upload a file:</label>
          <br />
          {errors.fileError && (
            <span className="error">{errors.fileError}</span>
          )}
          <Input
            title=""
            type="file"
            id="file"
            name="file"
            ref={file}
            className="file_input"
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
        {isSaved && <p>Form data saved!</p>}
      </form>
    </div>
  );
};

export default Form;
