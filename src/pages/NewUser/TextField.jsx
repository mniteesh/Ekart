import { ErrorMessage, Field } from "formik";
import React from "react";

const TextField = (props) => {

  return (
    <div className="newUserItem">
      <label for={props.name}>{props.label}</label>
      <Field name={props.name} type = {props.type} />
      <ErrorMessage component="div"  name={props.name} className="errorField" />
    </div>
  );
};

export default TextField;
