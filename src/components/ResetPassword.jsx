/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { assets } from "../assets/assets";

const ResetPassword = ({ setShowLogin, setShowReserPassword }) => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const value = e.clipboardData.getData("text");
    const valueArray = value.split("");
    valueArray.forEach((v, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = v;
      }
    });
  };

  const updateShow = () => {
    setShowLogin(false);
    setShowReserPassword(false);
  };

  return (
    <div className="absolute z-[1] w-full h-full bg-[#00000090] grid ">
      {!isEmailSent && (
        <form className="place-self-center w-[max(23vw,_330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-lg text-sm animate-[fadeIn,0.5s] ">
          <div className="flex justify-between items-center text-black ">
            <h2 className="font-semibold text-xl ">Reset Password</h2>
            <img
              className="cursor-pointer w-4 "
              onClick={updateShow}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 ">
            <input
              className="outline-none border-solid border-[#c9c9c9] border-[1px] p-2.5 rounded-lg"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <button
            onClick={() => setIsEmailSent(true)}
            className="border-none p-2.5 rounded-lg text-white bg-[tomato] text-[15px] cursor-pointer"
          >
            Submit email
          </button>
        </form>
      )}

      {isEmailSent && !isOtpSubmitted && (
        <form className="place-self-center w-[max(23vw,_330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-lg text-sm animate-[fadeIn,0.5s] ">
          <div className="flex justify-between items-center text-black ">
            <h2 className="font-semibold text-xl">Password OTP</h2>
            <img
              className="cursor-pointer w-4 "
              onClick={updateShow}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="flex  gap-1">
            {Array(6)
              .fill(0)
              .map((_, index) => {
                return (
                  <input
                    required
                    maxLength={1}
                    className="w-12 h-12 bg-gray-400 rounded flex px-3.5 py-3 text-white outline-none text-3xl max-750:w-11 max-750:h-11"
                    type="text"
                    key={index}
                    ref={(e) => (inputRefs.current[index] = e)}
                    onInput={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                  />
                );
              })}
          </div>

          <button onClick={()=>setIsOtpSubmitted(true)} className="border-none p-2.5 rounded-lg text-white bg-[tomato] text-[15px] cursor-pointer">
            Submit OTP
          </button>
        </form>
      )}
      {isEmailSent && isOtpSubmitted && (
        <form className="place-self-center w-[max(23vw,_330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-lg text-sm animate-[fadeIn,0.5s] ">
          <div className="flex justify-between items-center text-black ">
            <h2 className="font-semibold text-xl ">Reset Password</h2>
            <img
              className="cursor-pointer w-4 "
              onClick={updateShow}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 ">
            <input
              className="outline-none border-solid border-[#c9c9c9] border-[1px] p-2.5 rounded-lg"
              type="password"
              placeholder="New Password"
              required
            />
          </div>

          <button
            className="border-none p-2.5 rounded-lg text-white bg-[tomato] text-[15px] cursor-pointer"
          >
            Submit New Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
