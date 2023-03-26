import React, { ChangeEvent } from "react";
import "./checkbox.css";

interface Props {
  reference: React.RefObject<HTMLInputElement>;
  description: string;
  name: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Checkbox extends React.PureComponent<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reference, description } = this.props;
    return (
      <label htmlFor="checkbox" className="checkbox-label">
        <input
          id="checkbox"
          type="checkbox"
          ref={reference}
          className="checkbox-input"
          onChange={this.props.onChange}
        />
        {description}
      </label>
    );
  }
}

export default Checkbox;
