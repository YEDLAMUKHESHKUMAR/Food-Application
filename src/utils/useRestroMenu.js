import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestroMenu = (id) => {
  const [ResInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    setResInfo(json);
    // console.log("restroMenu",json)
  };
  return ResInfo;
};

export default useRestroMenu;
