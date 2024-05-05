import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import classes from "./index.module.css";

const CheckBoxField = ({ text }: { text: string }) => {
  return (
    <>
      <FormControlLabel
        className={classes.gdprWrapper}
        control={<Checkbox color="default" />}
        label={text}
      />
    </>
  );
};

export default CheckBoxField;
