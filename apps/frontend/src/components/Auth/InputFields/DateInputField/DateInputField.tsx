import { ChangeEvent, useState } from "react";
import classes from "./index.module.css";

const DateInputField = ({ label }: { label: string }) => {
  const [dateValue, setDateValue] = useState("");

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setDateValue(newDate);
  };

  return (
    <div className={classes.dateInputField}>
      <label>{label}</label>
      <input onChange={handleDateChange} type="date" />
    </div>
  );
};

export default DateInputField;
