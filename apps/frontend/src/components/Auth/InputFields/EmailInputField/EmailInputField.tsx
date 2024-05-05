import { ChangeEvent } from "react";
import classes from "./index.module.css";

const EmailInputField = ({
  label,
  placeholder,
  onChange,
  name,
}: {
  label: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) => {
  return (
    <div className={classes.EmailInputField}>
      <label htmlFor={label}>{label}</label>
      <input
        type="email"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default EmailInputField;
