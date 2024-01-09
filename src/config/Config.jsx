import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApiData } from "../redux/action/TotalAction";

export const Config = () => {
  let dispatch = useDispatch();
  let apiGet = async () => {
    try {
      let totaldata = await axios.get("http://localhost:8000/data");
      dispatch(getApiData(totaldata.data));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("get api data finished");
    }
  };
  useEffect(() => {
    apiGet();
  }, [dispatch]);
};
