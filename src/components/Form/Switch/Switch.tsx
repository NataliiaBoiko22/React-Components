import React, { ChangeEvent } from "react";
import "./switch.css";

interface Props {
  name: string;
  reference: React.RefObject<HTMLInputElement>;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface State {
  switcher: {
    isOn: boolean;
  };
}

class Switch extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state = {
      switcher: {
        isOn: false,
      },
    };
  }

  handleSwitch() {
    return this.setState((state: State) => {
      return { switcher: { isOn: !state.switcher.isOn } };
    });
  }

  render() {
    const { reference, name } = this.props;
    const { switcher } = this.state;
    return (
      <label htmlFor="react-switch-new" className="label">
        <input
          ref={reference}
          name={name}
          onChange={this.handleSwitch}
          className="react-switch-checkbox"
          id="react-switch-new"
          type="checkbox"
        />
        <label className="react-switch-label" htmlFor="react-switch-new">
          <span className="react-switch-button" />
        </label>
        {switcher.isOn ? (
          <div className="description">
            I trust you and do not require reports
          </div>
        ) : (
          <div className="description"> I want to receive a report </div>
        )}
      </label>
    );
  }
}

export default Switch;
