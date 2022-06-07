import { useRef } from "react";

export const ModalLogin = (props) => {
  const inputElement1 = useRef("");
  const inputElement2 = useRef("");
  const kosong = () => {
    inputElement1.current.value = "";
    inputElement2.current.value = "";
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
              onClick={kosong}
            >
              ✕
            </label>
            <div className="">
              <div className="form-control">
                <label className="input-group">
                  <span>Email</span>
                  <input
                    ref={inputElement1}
                    type="text"
                    placeholder="ex : abdullah"
                    className="input input-bordered"
                    onChange={props.val1}
                  />
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-control mt-4">
                <label className="input-group">
                  <span>Password</span>
                  <input
                    ref={inputElement2}
                    type="text"
                    placeholder="*********"
                    className="input input-bordered"
                    onChange={props.val2}
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
              <button onClick={props.auth} htmlFor={props.id} className="btn">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
