// 12
import { useState } from "react";

const UseOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  window.addEventListener("offline", () => {
    setonlineStatus(false);
  });

  window.addEventListener("online", () => {
    setonlineStatus(true);
  });

  return onlineStatus;
};

export default UseOnlineStatus;
