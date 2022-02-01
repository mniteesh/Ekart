import axios from "axios";
import { updateStart, updateEror, updateSuccess } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post(
      "https://ekart-ca3cf-default-rtdb.firebaseio.com/users.json",
      user
    );
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateEror());
  }
};


  

