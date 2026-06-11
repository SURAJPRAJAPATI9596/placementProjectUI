import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const Footer = ({ dark, setDark }) => {
  return (
    <>
      <div
        className={`flex flex-col text-sm md:text-lg ${dark ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <p className="border border-black text-center bg-blue-600 mt-3.5 text-white">
          @suraj Prajapati
        </p>
        <div
          className={`flex flex-col sm:flex-row justify-around md:pr-30 md:pl-30 mt-2 ${dark ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <div className=" pl-5 ">
            <p className="text-2xl">Get in touch</p>
            <p>Email : surajprajapatijob@gmail.com</p>
            <p>Linkedin: suraj-prajapati-9596</p>
            <p>WhatsApp : 8737003813</p>
          </div>
          <div
            className={`rounded-2xl p-5 5 5 5  lg:w-[50%] ${dark ? "border border-white" : "border border-black"}`}
          >
            <h1 className="text-2xl">Send your feedback</h1>
            <form
              className="flex flex-col gap-2 "
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="email">Your Email Id</label>
              <input
                type="text"
                id="email"
                className="border"
                placeholder="Enter your email"
              />
              <label htmlFor="sms">Type your message</label>
              <textarea name="" id="sms" className="border" rows={3}></textarea>

              <Button variant="contained" endIcon={<SendIcon />} className="">
                Send
              </Button>
            </form>
          </div>
        </div>
        <p className="border border-black text-center bg-blue-600 mt-3.5 text-white">
          @All wright reserved pw
        </p>
      </div>
    </>
  );
};

export default Footer;
