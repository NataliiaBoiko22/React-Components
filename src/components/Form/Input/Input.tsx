import React from "react";
import "./input.css";
interface IProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
  errorMess?: string | null;
}
const Input = React.forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { title, errorMess, ...restProps } = props;

  return (
    <div>
      <label className="label">
        {title}
        <input className="inp" {...restProps} ref={ref} />
      </label>
      {errorMess && <span className="label">{errorMess}</span>}
      <span className="focus-bg" />
    </div>
  );
});
export default Input;
