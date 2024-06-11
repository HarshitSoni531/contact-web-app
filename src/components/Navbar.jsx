import React from "react"; // Assuming you have a CSS file for styling

export default function Navbar() {
  return (
    <>
      <div
        style={{ backgroundImage: 'url("/backgroundcolor2.png")' }}
        className="h-[60px] m-1 rounded-lg justify-center items-center flex text-[20px] gap-1"
      >
        <img
          src="logo.png"
          alt="logo image not available"
          height={"32px"}
          width={"32px"}
        />
        <h1 className="font-bold ">FireBase Contact App</h1>
      </div>
    </>
  );
}
