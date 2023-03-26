import React, { ChangeEvent } from "react";
import "./upload.css";

interface Props {
  reference: React.RefObject<HTMLInputElement>;
  name: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface State {
  file: string | null;
}

class Upload extends React.PureComponent<Props, State> {
  label: React.RefObject<HTMLLabelElement> = React.createRef();

  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.uploadButtonClick = this.uploadButtonClick.bind(this);
    this.state = { file: null };
  }

  // handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   event.preventDefault();
  //   if (!event.target.files || !event.target.files.length) {
  //     return this.setState({
  //       file: null,
  //     });
  //   }
  //   return this.setState({
  //     file: event.target.files
  //       ? URL.createObjectURL(event.target.files[0]).toString()
  //       : null,
  //   });
  // }
  // handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   event.preventDefault();
  //   if (!event.target.files || !event.target.files.length) {
  //     return this.setState({
  //       file: null,
  //     });
  //   }
  //   const file = event.target.files
  //     ? URL.createObjectURL(event.target.files[0]).toString()
  //     : null;
  //   console.log(file);
  //   return this.setState({ file });
  // }
  // uploadButtonClick() {
  //   this.label.current?.click();
  // }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target.files || !event.target.files.length) {
      return this.setState({
        file: null,
      });
    }
    const file = URL.createObjectURL(event.target.files[0]).toString();
    console.log(file);
    this.setState({ file });
  }
  uploadButtonClick() {
    this.label.current?.click();
  }

  render() {
    const { reference } = this.props;
    const { file } = this.state;
    return (
      <div className="file-upload-wrapper">
        <input
          name="file-upload"
          ref={reference}
          type="file"
          id="input-file-upload"
          onChange={this.handleChange}
          accept="image/png, image/jpg, image/gif, image/jpeg"
          multiple={false}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          ref={this.label}
        >
          <img
            className="uploaded-image"
            src={file || "../../../../assets/add-image.svg"}
            alt="uploaded"
          />
          <p className="upload-paragraf">
            Please upload a copy of your identity document
          </p>
        </label>
        <button
          type="button"
          className="upload-button"
          onClick={this.uploadButtonClick}
        >
          <img src="../../../../assets/upload.svg" alt="upload-icon" />
          Upload image<sup>*</sup>
        </button>
      </div>
    );
  }
}

export default Upload;
