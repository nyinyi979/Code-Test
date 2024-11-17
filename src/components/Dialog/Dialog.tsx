import React from "react";

/**
 * 
 * @param children Content to be rendered
 * @param open boolean value to animate the dialog
 * @param closeDialog closeDialog function 
 ** Usage sample 
 ** modelOpen - {bg: false, dialog: true}
 ** adding two state will allow transitions to happen
 ** modelOpen.bg && component
 * @returns 
 */
const Dialog = ({ children, open, closeDialog }) => {
  return (
    <div
      onClick={closeDialog}
      className={`fixed top-0 left-0 w-full h-full bg-black/30 transition-opacity ${
        open ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`absolute w-fit h-fit top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-transform origin-center ${open ? "scale-100" : "scale-75"} bg-background shadow-lg shadow-black p-5 rounded-xl`}
        onClick={(ev)=>ev.stopPropagation()}
      >
        <button className="absolute right-5 size-4" onClick={closeDialog}>
            <img src="/images/icon/cross.svg"/>
        </button>
        {children}
      </div>
    </div>
  );
};
export default Dialog;

