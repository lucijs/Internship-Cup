import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import classes from "./index.module.css";
import React from "react";

const CheckBoxField = ({
  text,
  setState,
}: {
  text: string;
  setState: React.SetStateAction<any>;
}) => {
  return (
    <>
      <FormControlLabel
        className={classes.gdprWrapper}
        control={
          <Checkbox
            color="default"
            onChange={(e, newValue) => setState(newValue)}
          />
        }
        label={text}
      />
    </>
  );
};

export default CheckBoxField;
