import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppProvider from "./AppContext/Provider";

import "./index.css";
import Singup from "./RouteComponents/Singup";
import Login from "./RouteComponents/Login";
import Today from "./RouteComponents/Today";
import Habits from "./RouteComponents/Habits";
import Historic from "./RouteComponents/Historic";
import { useContext } from "react";
import AppContext from "./AppContext/Context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Singup />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/historico" element={<Historic />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
