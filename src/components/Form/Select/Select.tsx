import React from "react";
import { UseFormRegister } from "react-hook-form";
import "./select.css";

interface IFormInput {
  support: string;
}

const Select = React.forwardRef<
  HTMLSelectElement,
  ReturnType<UseFormRegister<IFormInput>>
>(({ onChange, name }, ref) => {
  return (
    <>
      <div>
        <label>
          Type of support:
          <select
            className="select"
            title="Support"
            aria-label="Type of support"
            name={name}
            id="support"
            ref={ref}
            defaultValue=""
            onChange={onChange}
          >
            <option value="Money"> Money </option>
            <option value="Information">Information</option>
            <option value="Advertisement">Advertisement</option>
            <option value="Other way">Other way</option>
          </select>
        </label>
      </div>
    </>
  );
});
export default Select;
