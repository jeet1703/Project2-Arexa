import React from "react";
import Header from "./Header";
import PhoneImage from "../assets/phone.jpg";
import Vid from "../assets/vidmp4.mp4";
import "../index.css";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Header />
      <main className="flex flex-col lg:flex-row items-center justify-center flex-1 p-6 lg:p-16">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-10">
            Immersive AR experiences for
            <span
              style={{
                backgroundImage:
                  "linear-gradient(to right, #5F4FD4, #9830B9 , #D1109F, #FE2B79,#FFD049)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {" "}
              Instagram
            </span>
            ,
            <span
              className="text-yellow-300 relative"
              style={{
                textShadow:
                  "2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000",
              }}
            >
              {" "}
              Snapchat
            </span>
            <span
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000000, #08BFC2 , #EC2B60)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {" "}
              Tiktok
            </span>{" "}
            and
            <span className="text-blue-500"> Web</span>
          </h1>
          <p className="mt-4 lg:mt-6 text-black font-semibold text-lg md:text-xl lg:w-[30rem] mb-5">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum.
          </p>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-2 lg:w-1/2">
          <img
            src={PhoneImage}
            alt="Phone"
            className="absolute left-0 transform md:translate-x-2/3 -translate-x-2/3 w-32 md:w-48 lg:w-48 h-auto rounded-2xl border-[4px] border-emerald-50"
            style={{ zIndex: 1 }}
          />
          <div
            className="relative w-42 h-64 md:h-80 lg:h-96 bg-gray-200 rounded-2xl border-[4px] border-emerald-50 overflow-hidden"
            style={{ zIndex: 2 }}
          >
            <video className="w-full h-full" muted autoPlay loop src={Vid}>
              Your browser does not support the video tag.
            </video>
          </div>
          <img
            src={PhoneImage}
            alt="Phone"
            className="absolute md:right-0 transform translate-x-2/3 md:-translate-x-2/3 w-32 md:w-48 lg:w-48 h-auto rounded-2xl border-[4px] border-emerald-50"
            style={{ zIndex: 1 }}
          />
        </div>
      </main>
      <footer className="flex justify-center md:justify-start md:ms-20 w-full p-5 text-black items-center">
        <p className="mr-2">Scroll to explore</p>
        <i className="fas fa-arrow-down"></i>
      </footer>
    </div>
  );
};

export default Hero;
