import React, { useState } from "react";
import AppContext from "./Context";

const defaultToken = {
  token: null,
};
const defaultProgress = {
  progress: 0,
};

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(defaultToken);
  const [progress, setProgress] = useState(defaultProgress);

  return (
    <AppContext.Provider value={{ token, setToken, progress, setProgress }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
