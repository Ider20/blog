import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const Contacts = () => {
  return (
    <div>
      <Header />
      <div className="pt-[100px] lg:pt-[180px] lg:w-[624px] m-auto mb-28 ">
        <div className="mb-5 text-4xl font-semibold">Contact Us</div>
        <div className="mb-5 text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </div>
        <div className="flex mb-5 justify-between">
          <div className="border w-[294px] h-[133px] p-3 rounded-lg">
            <div className="text-2xl mb-[10px] font-semibold">Address</div>
            <div className="text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </div>
          </div>
          <div className="border w-[294px] h-[133px] p-3 rounded-lg">
            <div className="text-2xl mb-[10px] font-semibold">Contact</div>
            <div className="text-[#696A75]">313-332-8662</div>
            <div className="text-[#696A75]">info@email.com</div>
          </div>
        </div>
        <div className="bg-[#DCDDDF] p-8 rounded-md">
          <div className="mb-6 text-lg font-semibold">Leave a Message</div>
          <div className="flex mb-6 gap-7">
            <input
              type="text"
              className="border border-[#97989F] rounded-md w-[225px] p-1"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="border border-[#97989F] rounded-md w-[225px] p-1"
              placeholder="Your Email"
            />
          </div>
          <div>
            <input
              type="text"
              className="border border-[#97989F] w-[478px] mb-6 rounded-md p-1"
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border border-[#97989F] w-[478px] h-[134px] mb-6 rounded-md p-1"
              placeholder="Write a message"
            ></textarea>
          </div>
          <div>
            <button className="border-solid bg-[#4B6BFB] text-white p-3 text-[14px] rounded-md hover:shadow-lg active:scale-90 ease-in-out duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
