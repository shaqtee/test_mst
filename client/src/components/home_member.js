import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Member = () => {
  const auth = useLocation();
  const isLoggin = auth.state
    ? auth.state.role == 0 && auth.state.token === "active"
      ? true
      : false
    : false;
  const isAuth = isLoggin ? auth.state : null;
  console.log(isAuth);
  const [image, setImage] = React.useState({
    uploaded: `http://localhost:8800/upload/${auth.state.photo}`,
  });
  const [msg, setMsg] = React.useState();
  useEffect(() => {
    const getId = async () => {
      try {
        await axios.get(`/auth/find/${isAuth.id}`).then((res) => {
          console.log(res);
          setImage({
            uploaded: `http://localhost:8800/upload/${res.data[0].photo}`,
          });
        });
      } catch (error) {}
    };
    getId();
  }, [msg]);

  /* upload */

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    let uploaded = URL.createObjectURL(e.target.files[0]);
    setImage({ uploaded, isSave: e.target.files[0] });
  };

  const uploadImage = async () => {
    if (!image.isSave) return alert("Please select an image");

    let formData = new FormData();
    formData.append("photo", image.isSave, image.isSave.name);
    formData.append("data", [
      auth.state.username,
      auth.state.password,
      auth.state.email,
    ]);

    try {
      await axios.post("/file", formData).then((res) => {
        console.log(res.data.imageURL);
        setImage({ uploaded: res.data.imageURL });
        setMsg(`${res.data.imageURL.split("/").pop()} uploaded`);
      });
    } catch (err) {
      setImage({
        uploaded: `http://localhost:8800/upload/${auth.state.photo}`,
      });
    }
  };
  /* endUpload */
  return (
    <div className="member">
      {isLoggin ? (
        <>
          <div className="navbar dark:bg-slate-800 rounded-b-lg">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl text-error">
                daisyUI
              </a>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex="0"
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body bg-neutral">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="bg-neutral menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link to="/">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-8xl text-center">
              hi {auth.state.username}! <br /> MEMBER PAGE
            </p>
            <div className="flex flex-col items-center">
              <img
                src={image.uploaded}
                className="h-40 w-40 bg-[#bada55] overflow-y-scroll object-contain m-auto my-3"
              />
              <div className="m-auto">
                <label className="input-group input-group-md">
                  <span className="bg-neutral">MD</span>
                  <input
                    type="file"
                    placeholder="Type here"
                    className="input input-bordered input-md form-control pt-1"
                    onChange={fileHandler}
                  />
                </label>
              </div>
              <button
                className="btn btn-outline w-28 my-3"
                onClick={uploadImage}
              >
                reUpload
              </button>
              <div className="m-auto">Nama : {auth.state.username}</div>
              <div className="m-auto">Email : {auth.state.email}</div>
            </div>
          </div>
        </>
      ) : (
        history.back()
      )}
    </div>
  );
};

export default Member;
