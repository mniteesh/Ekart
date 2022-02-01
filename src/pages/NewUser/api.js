import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../../redux/userSlice";

const useAction = ()=>{
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.user);
  
    useEffect(() => {
      dispatch(showUsers());
    }, [dispatch]);
  

const userData = [];

for (const key in userInfo) {
  const quoteObj = {
    id: key,
    ...userInfo[key],
  };

  userData.push(quoteObj);
}


return userData;

}

export default useAction ;