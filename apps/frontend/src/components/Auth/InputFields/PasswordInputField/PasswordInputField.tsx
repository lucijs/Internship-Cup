import { ChangeEvent } from "react";
import classes from "./index.module.css";

const PasswordInputField = ({
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
    <div className={classes.PasswordInputField}>
      <label htmlFor={label}>{label}</label>
      <input
        type="password"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default PasswordInputField;
