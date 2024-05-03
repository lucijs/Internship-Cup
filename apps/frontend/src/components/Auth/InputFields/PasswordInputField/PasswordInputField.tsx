import classes from "./index.module.css";

const PasswordInputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className={classes.PasswordInputField}>
      <label htmlFor={label}>{label}</label>
      <input type="password" placeholder={placeholder} />
    </div>
  );
};

export default PasswordInputField;
