import { ChangeEvent, useState } from "react";
import classes from "./index.module.css";

const DateInputField: React.FC<{
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, onChange }) => {
  const [dateValue, setDateValue] = useState("");

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setDateValue(newDate);
    onChange(event);
  };

  return (
    <div className={classes.dateInputField}>
      <label>{label}</label>
      <input
        onChange={handleDateChange}
        type="date"
        value={dateValue}
        name={name}
      />
    </div>
  );
};

export default DateInputField;
