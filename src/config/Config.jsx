import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Config = () => {
  const dispatch = useDispatch();
  const apiGet = async () => {
    try {
      const totaldata = await axios.get("http://localhost:8000/data");
      dispatch(getApi(totaldata.data));
      // console.log(totaldata.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiGet();
  }, [dispatch]);
};
