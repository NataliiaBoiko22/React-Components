import React, { ChangeEvent } from "react";
import "./input.css";

interface Props {
  reference: React.RefObject<HTMLInputElement>;
  labelText: string;
  name: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Input extends React.PureComponent<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { labelText, reference } = this.props;
    return (
      <label htmlFor="inp" className="inp">
        <input
          ref={reference}
          autoComplete="new-password"
          type="text"
          id="inp"
          placeholder="&nbsp;"
        />
        <span className="label">
          {labelText}
          <sup>*</sup>
        </span>
        <span className="focus-bg" />
      </label>
    );
  }
}

export default Input;
