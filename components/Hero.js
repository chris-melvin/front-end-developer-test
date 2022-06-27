import React from "react";

const Hero = () => {
  return (
    <section className="bg-black p-4">
      <div className="max-w-screen-xl  text-white mx-auto py-48">
        <p className="text-2xl uppercase">Grab your copy of </p>
        <p className="text-6xl uppercase max-w-2xl">
          the <span className="text-primary">premium</span> quality psd template
          for <span className="text-primary">free</span>
        </p>
        <button className="bg-secondary-100 px-20 py-4 mt-10 rounded-sm">
          Download
        </button>
      </div>
    </section>
  );
};

export default Hero;
