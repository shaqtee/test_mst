import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import fetchData from "../hook/login.js";
import pullData from "../hook/register.js";
import { ModalLogin } from "./partials/ModalLogin.js";
import { ModalRegister } from "./partials/ModalRegister.js";
import ForgotPassword from "./partials/ForgotPassword.js";

const Home = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState(false);
  const [photo, setPhoto] = useState("");

  const defaultState = () => {
    setUsername("");
    setPassword("");
    setEmail("");
    setPhoto("");
    setMessage(false);
  };

  const [image, setImage] = React.useState({
    uploaded: "https://place-hold.it/300",
  });

  useEffect(() => {
    setUsername((prev) => prev);
    setPassword((prev) => prev);
    setEmail((prev) => prev);
    setPhoto(image?.isSave?.name);
    setData({ username, password, email, photo });
  }, [username, password, email, , photo, image]);
  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getUsername = (e) => {
    setUsername(e.target.value);
  };

  const getAuth = async () => {
    if (email == "" || password == "")
      return setMessage("Email dan Password tidak boleh kosong");

    const { redirect } = await fetchData(email, password);
    if (!redirect) return setMessage("Email atau Password salah");

    switch (redirect.role) {
      case 1:
        navigate("/admin", { state: redirect });
        break;
      case 0:
        navigate("/member", { state: redirect });
        break;
    }
  };

  const getRegister = async () => {
    const pattern = /^[\w\.]+@\w+(\.\w+)$/gm;

    if (!username || !password || !email) {
      setMessage("tidak boleh kosong!");
    } else if (email.match(pattern) === null) {
      setMessage("email tidak valid!");
    } else {
      //await uploadImage();
      //return;
      const { res } = await pullData(data);
      //console.log(`res:${res} , ${photo}`);
      console.log(data);
      if (!res) return setMessage("email already exist!");
      await uploadImage();
      setMessage("check your email to activate");
      //await getAuth();
    }
  };

  /* upload */
  const [msg, setMsg] = React.useState();

  const fileHandler = (e) => {
    let uploaded = URL.createObjectURL(e.target.files[0]);
    setImage({ uploaded, isSave: e.target.files[0] });
  };

  const uploadImage = async () => {
    if (!image.isSave) return setMessage("Please select an image");

    let formData = new FormData();
    formData.append("photo", image.isSave, image.isSave.name);
    formData.append("data", [username, password, email]);
    //console.log(formData.getAll("data"));
    //return;

    try {
      await axios
        .post("/file", formData)
        .then((res) =>
          setMessage(`${res.data.imageURL.split("/").pop()} uploaded`)
        );
    } catch (err) {
      setImage({ uploaded: "https://place-hold.it/300" });
    }
  };
  /* endUpload */

  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <div className="navbar dark:bg-slate-800 rounded-b-lg">
        <div className="navbar-start">
          <a className="MS_customClass text-2xl">
            MST Testing
            <span onClick={() => navigate("/testing")}>®</span>
          </a>
        </div>
        <div className="navbar-end gap-2">
          <div className="flex flex-col items-center">
            <div className="flex gap-2">
              <label
                htmlFor="login-modal"
                className="btn modal-button"
                onClick={defaultState}
              >
                Sign in
              </label>
              <label
                htmlFor="register-modal"
                className="btn modal-button"
                onClick={defaultState}
              >
                Register
              </label>
            </div>

            <label
              htmlFor="forgot-modal"
              className="cursor-pointer hover:text-blue-400"
              onClick={defaultState}
            >
              Forgot Password
            </label>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="mockup-code mt-3">
        <pre data-prefix="">
          <code>npm install</code>
        </pre>
        <pre data-prefix="1" className="bg-warning text-warning-content">
          <code>npm run dev</code>
        </pre>
        <pre data-prefix="2">
          <code>
            <span className="text-green-500">✔</span> ready daisyUi
          </code>
        </pre>
        <pre data-prefix="3">
          <code>
            <span className="text-green-500">✔</span> ready nodemailer
          </code>
        </pre>
        <pre data-prefix="4">
          <code>
            <span className="text-green-500">✔</span> ready redux
          </code>
        </pre>
        <pre data-prefix="5">
          <code>
            <span className="text-green-500">✔</span> ready axios
          </code>
        </pre>
        <pre data-prefix="6">
          <code>
            <span className="text-green-500">✔</span> ready react-router-dom
          </code>
        </pre>
        <pre data-prefix="7">
          <code>
            <span className="text-green-500">✔</span> ready package.json (proxy
            8080)
          </code>
        </pre>
        <pre data-prefix="8">
          <code>
            <span className="text-green-500">✔</span> ready tailwind.config.js
            (theme)
          </code>
        </pre>
      </div>

      <ModalLogin
        id="login-modal"
        message={message}
        val1={getEmail}
        val2={getPassword}
        auth={getAuth}
      />
      <ModalRegister
        id="register-modal"
        message={message}
        val1={getUsername}
        val2={getPassword}
        val3={getEmail}
        reg={getRegister}
        image={image}
        msg={msg}
        fileHandler={fileHandler}
        uploadImage={uploadImage}
      />
      <ForgotPassword
        id="forgot-modal"
        message={message}
        val1={getEmail}
        val2={getPassword}
        auth={getAuth}
      />
    </div>
  );
};

export default Home;
