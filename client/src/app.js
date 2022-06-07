import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/public.js";
import Member from "./components/home_member.js";
import Admin from "./components/home_admin.js";
/* Test Import */

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/admin" element={<Admin />} />
          {/* Test Route */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
