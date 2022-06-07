import axios from "axios";
import { useState } from "react";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailVal = (e) => {
    setEmail(e.target.value);
  };
  const passwordVal = (e) => {
    setPassword(e.target.value);
  };
  console.log(email, password);
  const confirmPass = async () => {
    const pattern = /^[\w\.]+@\w+(\.\w+)$/gm;
    if (email == "") return alert("Email tidak boleh kosong");
    if (email.match(pattern) === null) return alert("Email tidak valid");

    const { res } = await axios.post("/auth/forgot/", {
      email,
      password,
    });
    console.log(res);
  };
  return (
    <>
      <input type="checkbox" id={props.id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white dark:bg-black">
          <div className="flex flex-col items-end w-80 m-auto">
            <label
              htmlFor={props.id}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="">
              <div className="form-control">
                <label className="input-group">
                  <span>Email</span>
                  <input
                    type="text"
                    placeholder="ex : abdullah"
                    className="input input-bordered"
                    onChange={(e) => emailVal(e)}
                  />
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-control">
                <label className="input-group">
                  <span>Password</span>
                  <input
                    type="text"
                    placeholder="*******"
                    className="input input-bordered"
                    onChange={(e) => passwordVal(e)}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="modal-action justify-center">
            <div className="flex flex-col justify-center">
              {props.message ? (
                <div className="flex gap-2 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>{props.message}</span>
                </div>
              ) : (
                ""
              )}
              <button onClick={confirmPass} htmlFor={props.id} className="btn">
                Confirm Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
