import "./NewUser.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/userSlice";

const NewUser = () => {
    
  const validate = Yup.object({
    username: Yup.string()
      .max(10, "must be 10 characters")
      .required("required"),
    fullName: Yup.string()
      .max(20, "must be 20 characters or less")
      .required("required"),
    email: Yup.string().email("eail is invalid").required("Email is Required"),
    password: Yup.string()
      .min(8, "must be 8 characters or more")
      .required("required"),
    phone: Yup.string("Must be a number")
      .required("required")
      .matches(/[0-9]/,"Phone number is not valid")
      .min(10, "Min 10 digit number"),
    address: Yup.string()
      .min(10, "add addredd with city state and pincode")
      .required("required"),
    gender: Yup.string().required("required"),
    active: Yup.string().required("required"),
  });

  const dispatch = useDispatch();

  const submitHandler =  (value) => {
   dispatch(addUsers(value));
  }


  
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>

      <Formik
        initialValues={{
          username: "",
          fullName: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          gender: "",
          active: "",
        }}
        validationSchema={validate}
        onSubmit={submitHandler}
        
      >
        {(formik) => (
          <Form className="newUserForm" >
            <TextField label="UserName" name="username" type="text" />
            <TextField label="Full Name" name="fullName" type="text" />
            <TextField label="Email" name="email" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Phone No" name="phone" type="text" />
            <TextField label="Address" name="address" type="text" />
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <label>
                  <Field type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" />
                  Female
                </label>
                <label>
                  <Field type="radio" name="gender" value="other" />
                  Other
                </label>
              </div>
            </div>
            <div className="newUserItem">
              <label>Active</label>
              <Field name="active" className="newUserSelect" as="select">
                <option value="choose" disabled  >Select</option>
                <option value="yes" >Yes</option>
                <option value="no" >No</option>
              </Field>
            </div>
            <button type="submit" className="newUserButton">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewUser;
