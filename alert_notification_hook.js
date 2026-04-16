import { useEffect } from "react";

export const useAlerts = (socket) => {
  useEffect(() => {
    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.speed > 100) alert("Overspeed!");
    };
  }, []);
};