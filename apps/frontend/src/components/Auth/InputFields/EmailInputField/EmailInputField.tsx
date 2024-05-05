import classes from "./index.module.css";

const EmailInputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className={classes.EmailInputField}>
      <label htmlFor={label}>{label}</label>
      <input type="email" placeholder={placeholder} />
    </div>
  );
};

export default EmailInputField;
