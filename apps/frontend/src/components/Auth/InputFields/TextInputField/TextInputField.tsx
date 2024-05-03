import classes from "./index.module.css";

const TextInputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className={classes.TextInputField}>
      <label htmlFor={label}>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default TextInputField;
