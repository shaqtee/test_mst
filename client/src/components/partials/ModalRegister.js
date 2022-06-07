import { useRef } from "react";

export const ModalRegister = (props) => {
  const inputElement1 = useRef("");
  const inputElement2 = useRef("");
  const inputElement3 = useRef("");
  const kosong = () => {
    inputElement1.current.value = "";
    inputElement2.current.value = "";
    inputElement3.current.value = "";
  };

  return (
    <>
      <input type="checkbox" id={props.id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white dark:bg-black">
          <label
            htmlFor={props.id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={kosong}
          >
            ✕
          </label>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col w-70 items-center m-auto">
              <div className="m-auto ">
                <div className="form-control">
                  <label className="input-group">
                    <span className="w-[6.5rem]">Username</span>
                    <input
                      ref={inputElement1}
                      type="text"
                      placeholder="abdullah"
                      className="input input-bordered"
                      onChange={props.val1}
                    />
                  </label>
                </div>
              </div>
              <div className="m-auto">
                <div className="form-control mt-4">
                  <label className="input-group">
                    <span className="w-[6.5rem]">Password</span>
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
              <div className="m-auto ">
                <div className="form-control mt-4">
                  <label className="input-group">
                    <span className="w-[6.5rem]">Email</span>
                    <input
                      ref={inputElement3}
                      type="text"
                      placeholder="abdullah@site.com"
                      className="input input-bordered"
                      onChange={props.val3}
                    />
                  </label>
                </div>
              </div>
              {/* Upload Photo */}
              <div className="flex flex-col py-2 items-center gap-2 bg-neutral mt-3">
                <img
                  src={props.image.uploaded}
                  className="h-40 w-40 bg-[#ffd359] overflow-y-scroll object-contain"
                />
                <div className="form-control">
                  <label className="input-group input-group-md">
                    <span>MD</span>
                    <input
                      type="file"
                      placeholder="Type here"
                      className="input input-bordered input-md form-control pt-1"
                      onChange={props.fileHandler}
                    />
                  </label>
                </div>
                <span className="MS_customClass">{props.msg}</span>
              </div>
              {/* endUploadPhoto */}
            </div>
          </div>
          <div className="modal-action flex flex-col justify-center">
            {props.message ? (
              <div className="flex gap-2 mb-3 m-auto">
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
            <button onClick={props.reg} htmlFor={props.id} className="btn">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
