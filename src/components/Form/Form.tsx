import React, { ChangeEvent } from "react";
import { RefObject } from "react";
import Checkbox from "./Checkbox/Checkbox";
import DatePicker from "../Form/DatePicker/DatePicker";
import Input from "../Form/Input/Input";
import Select from "../Form/Select/Select";
import SubmitBtn from "../Form/Submit/Submit";
import Switch from "../Form/Switch/Switch";
import Upload from "../Form/Upload/Upload";
import "./form.css";

interface Props {
  reference: RefObject<HTMLInputElement>;
  name: string;
  error?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

type FormValues = {
  firstName: string;
  lastName: string;
  file: File | null;
  select: string;
  switchElem: boolean;
  advCheckbox: boolean;
  notificationCheckbox: boolean;
};

interface State {
  formValues: FormValues;
  errors: {
    [key: string]: string;
  };
}
class Form extends React.Component<Props, State> {
  firstName: React.RefObject<HTMLInputElement> = React.createRef();

  lastName: React.RefObject<HTMLInputElement> = React.createRef();

  date: React.RefObject<HTMLInputElement> = React.createRef();

  select: React.RefObject<HTMLSelectElement> = React.createRef();

  file: React.RefObject<HTMLInputElement> = React.createRef();

  switchElem: React.RefObject<HTMLInputElement> = React.createRef();

  advCheckbox: React.RefObject<HTMLInputElement> = React.createRef();

  notificationCheckbox: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: Props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      formValues: {
        firstName: "string",
        lastName: "string",
        file: null,
        select: "string",
        switchElem: false,
        advCheckbox: false,
        notificationCheckbox: false,
      },
      errors: {},
    };
  }
  validateField(fieldName: string) {
    const { formValues } = this.state;
    let fieldValid = false;
    const errors = { ...this.state.errors };
    switch (fieldName) {
      case "firstName":
        fieldValid = formValues.firstName.trim().length > 0;
        errors.firstName = fieldValid ? "" : "Please enter a first name";
        break;
      case "lastName":
        fieldValid = formValues.lastName.trim().length > 0;
        errors.lastName = fieldValid ? "" : "Please enter a last name";
        break;
      default:
        break;
    }
    this.setState({ errors });
    return fieldValid;
  }
  // validateForm() {
  //   console.log("validator");
  //   const { formValues } = this.state;
  //   console.log(this.state);
  //   const errors = { ...this.state.errors };
  //   if (!formValues.file) {
  //     console.log("filevalidator");
  //     errors.file = "Please upload a file";
  //   } else {
  //     errors.file = "";
  //   }
  //   this.setState({ errors });
  //   return Object.values(errors).every((error) => !error);
  // }

  handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    const files = (event.target as HTMLInputElement).files;
    this.setState((prevState) => ({
      formValues: {
        ...prevState.formValues,
        [name]: files?.length ? files[0] : value,
        file: files?.length ? files[0] : prevState.formValues.file,
      },
    }));
    if (name === "firstName") {
      this.validateField("firstName");
    } else if (name === "lastName") {
      this.validateField("lastName");
    }
  }
  handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formValues: {
        ...prevState.formValues,
        [name]: value,
      },
    }));
  }

  handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    console.log(file);
    this.setState((prevState) => ({
      formValues: {
        ...prevState.formValues,
        file: file || null,
      },
    }));
  }
  handleSwitchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    this.setState((prevState) => ({
      formValues: {
        ...prevState.formValues,
        [name]: checked,
      },
    }));
  }
  handleCheckboxChange(name: keyof FormValues) {
    this.setState((prevState) => ({
      formValues: {
        ...prevState.formValues,
        [name]: !prevState.formValues[name],
      },
    }));
  }
  handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const firstName = this.firstName.current?.value;
    const lastName = this.lastName.current?.value;
    const date = this.date.current?.value;
    const select = this.select.current?.value;
    const switchElem = this.switchElem.current?.checked;
    const advCheckbox = this.advCheckbox.current?.checked;
    const notificationCheckbox = this.notificationCheckbox.current?.checked;
    const file = this.file.current?.value;
    const formData = {
      firstName,
      lastName,
      date,
      select,
      switchElem,
      advCheckbox,
      notificationCheckbox,
      file,
    };
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="form-wrapper">
        <form
          className="form"
          onSubmit={this.handleFormSubmit}
          autoComplete="off"
        >
          <p className="title">Please fill in the form fields</p>
          <Input
            reference={this.firstName}
            labelText="First Name"
            name="firstName"
            error={errors.firstName}
            onChange={this.handleInputChange}
          />
          <Input
            reference={this.lastName}
            labelText="Last Name"
            name="lastName"
            error={errors.lastName}
            onChange={this.handleInputChange}
          />
          <DatePicker
            reference={this.date}
            name="date"
            error={errors.date}
            onChange={this.handleInputChange}
          />
          <Select
            reference={this.select}
            name="select"
            error={errors.select}
            onChange={this.handleSelectChange}
          />
          <Switch
            reference={this.switchElem}
            name="switchElem"
            onChange={this.handleSwitchChange}
          />
          <Checkbox
            reference={this.advCheckbox}
            name="advCheckbox"
            description="I want to support continuously"
            onChange={(event) =>
              this.handleCheckboxChange(event.target.name as keyof FormValues)
            }
          />
          <Checkbox
            reference={this.notificationCheckbox}
            name="notificationCheckbox"
            description="I want to be notified of changes"
            onChange={(event) =>
              this.handleCheckboxChange(event.target.name as keyof FormValues)
            }
          />
          <Upload
            reference={this.file}
            name="file"
            error={errors.file}
            onChange={this.handleFileUpload}
          />
          <div className="somestyle">
            <sup>*</sup> - Required field
          </div>
          <SubmitBtn />
        </form>
      </div>
    );
  }
}

export default Form;
