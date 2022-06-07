import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/public.js";
import Member from "./components/home_member.js";
import Admin from "./components/home_admin.js";
/* Test Import */
import { UseReducer } from "./components/testing/usereducer.js";
import Memo from "./components/testing/usememo.js";
import Tailwind from "./components/testing/tailwind.js";
import { Classcom } from "./components/testing/classcom.js";
import ClassTwo from "./components/testing/class_two";
import ClassOne from "./components/testing/class_one";

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/admin" element={<Admin />} />
          {/* Test Route */}
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="/usememo" element={<Memo />} />
          <Route path="/tailwind" element={<Tailwind />} />
          <Route
            path="/classcom"
            element={<Classcom name="adisakti" email="adi.sakti@live.com" />}
          />
          <Route path="/classone" element={<ClassOne />} />
          <Route path="/classtwo" element={<ClassTwo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
