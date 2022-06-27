import React from "react";

const Contact = () => {
  return (
    <div className="p-4 pb-16 bg-secondary-400">
      <h2 className="text-4xl text-primary text-center">Contact</h2>
      <div className="max-w-4xl mx-auto ">
        <div className="flex flex-col md:flex-row md:space-x-8 py-8">
          <div className="w-full">
            <input
              type="text"
              name="name"
              className="border-b-4 border-black w-full bg-transparent"
            />
            <label htmlFor="name" className="block my-4">
              Name*
            </label>
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              className="border-b-4 border-black w-full bg-transparent"
            />
            <label htmlFor="email" className="block my-4">
              Email*
            </label>
          </div>
        </div>
        <div className="w-full py-8">
          <input
            type="text"
            name="message"
            className="border-b-4 border-black w-full bg-transparent"
          />
          <label htmlFor="message" className="block my-4">
            Message*
          </label>
        </div>
        <hr />
        <div className="flex justify-center">
          <button className="border-black bg-transparent border-2 px-16 py-2 my-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
