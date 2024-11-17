import React, { useState } from "react";

const SignUpDialogContet = ({ closeDialog, submit }) => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    error: null
  });
  const updateUsername = (ev) => {
    setInput({ ...input, username: ev.target.value });
  };
  const updatePassword = (ev) => {
    setInput({ ...input, password: ev.target.value });
  };
  const validateForm = () =>{
    if(input.username === "" || input.password === ""){
      setInput({...input, error: "All fields are required"});
      return () => clearTimeout(setTimeout(()=>{
        setInput({...input, error: null})
      },3000))
    } else submit(input)
  }
  return (
    <form onSubmit={(ev)=>ev.preventDefault()} className="sm:max-w-[400px] w-[90vw] flex flex-col gap-4 p-6 text-white">
      <h2 className="heading3 text-center">Sign in to your account!</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="text-grey">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={input.username}
          onChange={updateUsername}
          className="py-2 w-full outline-none bg-transparent px-4 border border-grey rounded-xl focus:border-[#9e9e9e] duration-300"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Password" className="text-grey">
          Password
        </label>
        <input
          type="password"
          id="Password"
          placeholder="Password"
          value={input.password}
          onChange={updatePassword}
          className="py-2 w-full outline-none bg-transparent px-4 border border-grey rounded-xl focus:border-[#9e9e9e] duration-300"
          required
        />
      </div>
      <a href="#" className="text-primary hover:text-[#4da73b] font-semibold text-center duration-300">
        Forgot password?
      </a>
      <div className="grid sm:grid-cols-2 gap-2 mt-2">
        <button type="submit" onClick={validateForm} className="btn-primary w-full">
          Submit
        </button>
        <button onClick={closeDialog} className="btn-ghost w-full">
          Cancel
        </button>
      </div>
    </form>
  );
};
export default SignUpDialogContet;
