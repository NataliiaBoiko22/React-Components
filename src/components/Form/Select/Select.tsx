import React from "react";
import "./select.css";

interface IProps extends React.HTMLProps<HTMLInputElement> {
  errorMess?: string | null;
}

const Select = React.forwardRef<HTMLSelectElement, IProps>((props, ref) => {
  const { errorMess } = props;
  const support = ["Money", "Information", "Advertisement", "Other way"];
  const supportLayout = support.map((support, index) => (
    <option value={support} key={index}>
      {support}
    </option>
  ));
  return (
    <div>
      <label>
        Type of support:
        <select
          className="select"
          title="Support"
          aria-label="Type of support"
          name="support"
          id="support"
          ref={ref}
          defaultValue=""
        >
          <option title="title" disabled value="" style={{ display: "none" }}>
            -- Select your support --
          </option>
          {supportLayout}
        </select>
      </label>
      {errorMess && <span>{errorMess}</span>}
    </div>
  );
});
export default Select;
