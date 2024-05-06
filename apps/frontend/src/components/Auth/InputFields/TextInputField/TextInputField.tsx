import { ChangeEvent } from "react";
import classes from "./index.module.css";

const TextInputField = ({
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
    <div className={classes.TextInputField}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default TextInputField;
