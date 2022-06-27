import React from "react";

const Footer = () => {
  return (
    <section className="bg-secondary-200">
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto md:space-x-2 space-y-4 text-gray-300 px-4 py-8 ">
        <div className="flex-1 ">
          <h1 className="text-4xl text-primary">Mairala</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            animi amet expedita itaque voluptate error.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            cupiditate tempora asperiores! Autem rerum maiores sit ducimus
            reiciendis quibusdam dolorem sint doloribus, provident dolore optio!
          </p>
        </div>
        <div className="flex-1">
          <h2 className="font-bold">RECENT POST</h2>
          <div>
            <p className="text-gray-400 py-2 text-sm">March 30, 2014</p>
            <p className="text-sm font-semibold">Lorem ipsum dolor sit amet.</p>
            <hr className="mt-4" />
          </div>
          <div>
            <p className="text-gray-400 py-2 text-sm">March 30, 2014</p>
            <p className="text-sm font-semibold">Lorem ipsum dolor sit amet.</p>
            <hr className="mt-4" />
          </div>
          <div>
            <p className="text-gray-400 py-2 text-sm">March 30, 2014</p>
            <p className="text-sm font-semibold">Lorem ipsum dolor sit amet.</p>
            <hr className="mt-4 text-sm" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold">TWITTER FEEDS</h2>
          <div>
            <p className="text-gray-400 py-2 text-sm">March 30, 2014</p>
            <p className="text-sm font-semibold">Lorem ipsum dolor sit amet.</p>
            <hr className="mt-4 text-sm" />
          </div>
          <div>
            <p className="text-gray-400 py-2 text-sm">March 30, 2014</p>
            <p className="text-sm font-semibold">Lorem ipsum dolor sit amet.</p>
            <hr className="mt-4 text-sm" />
          </div>
          <div>
            <p className="text-gray-400 py-2 text-sm">March 30, 2014</p>
            <p className="text-sm font-semibold">Lorem ipsum dolor sit amet.</p>
            <hr className="mt-4 text-sm" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="pb-4 font-bold">OUR ADDRESS</h2>
          <p className="pb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            itaque sint placeat quibusdam nobis magnam doloremque perspiciatis
            veritatis recusandae in amet illo, fugit dolorem fugiat, sapiente
            quia animi facere. Autem?
          </p>
          <div>
            <ul>
              <li>Moonshine St. 14/05 Light, Jupiter</li>
              <li>+00 (123) 456 78 90</li>
              <li>first.last@email.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-secondary-300 text-gray-400 py-8">
        ©2014 All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
