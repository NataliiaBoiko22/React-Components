import React, { ChangeEvent } from "react";
import "./datePicker.css";

interface Props {
  reference: React.RefObject<HTMLInputElement>;
  name: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class DatePicker extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reference } = this.props;
    return (
      <div className="wrapper">
        <span className="label-text">
          Birthday date<sup>*</sup>
        </span>
        <label>
          <input
            title="date"
            type="date"
            ref={reference}
            className="datepicker"
          />
        </label>
      </div>
    );
  }
}

export default DatePicker;
