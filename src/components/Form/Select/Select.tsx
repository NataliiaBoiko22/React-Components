import React, { ChangeEvent } from "react";
import "./select.css";

interface Props {
  reference: React.RefObject<HTMLSelectElement>;
  name: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

class Select extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reference } = this.props;
    return (
      <select
        title="select"
        className="select"
        defaultValue="default"
        ref={reference}
        onChange={this.props.onChange}
      >
        <option value="Money">Money</option>
        <option value="Products">Information</option>
        <option value="Products">Advertisement</option>
        <option value="default" hidden>
          Select type of support*
        </option>
      </select>
    );
  }
}

export default Select;
