import axios from "axios";
import { useState } from "react";
import "./NewUser.css";

import useInput from "../../hooks/useInput";

const NewUser = () => {
  const {
    value: userName,
    isValid: enterdUserNameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput,
  } = useInput(value => value.trim() !== '');



  let formIsValid = false;

  if(enterdUserNameIsValid){
    formIsValid = true ;
   
  }
 
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [active, setActive] = useState("yes");

  const submitHandler = (event) => {

    if(!enterdUserNameIsValid){
      return
    }

    const userData = {
      username: userName,
      fullName: fullName,
      email: email,
      password: password,
      phone: phone,
      address: address,
      gender: gender,
      active: active,
    };


    event.preventDefault();
    axios
      .post("https://ekart-ca3cf-default-rtdb.firebaseio.com/users.json", {
        userData,
      })
      .then((response) => {
        console.log(response.data);
      });

      resetNameInput();
    setfullName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    setGender("");
    setActive("");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={submitHandler}>
        <div className="newUserItem">
          <label>UserName</label>
          <input
            type="text"
            placeholder="john"
            value={userName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {usernameHasError && (<p>Name must not be empty</p>)}
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="john"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gamil.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="125632720"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Adress</label>
          <input
            type="text"
            placeholder="New York | USA"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="others"
              value="others"
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="others">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select
            name="active"
            id="active"
            className="newUserSelect"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button disabled={!formIsValid} className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
