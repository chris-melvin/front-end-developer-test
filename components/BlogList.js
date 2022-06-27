import React from "react";

const BlogList = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-4xl text-primary ">Our Blog</h1>
      <hr className="border-b-4 border-primary w-20 mx-auto my-8" />
      <p className="max-w-sm mx-auto text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vel magnam
        iure delectus fuga sint.
      </p>
      <Card />
      <Card reverse={true} />
      <Card />
    </div>
  );
};

export default BlogList;

const Card = ({ reverse }) => {
  return (
    <div
      className={`flex max-w-4xl mx-auto py-10 w-fit flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-auto max-w-md">
        <img
          src="https://images.unsplash.com/photo-1656332530132-d3c12d1bb013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1621&q=80"
          alt=""
        />
      </div>
      <div className="md:px-4 pt-0 space-y-2 max-w-md">
        <p className="text-gray-400">10 April 2014</p>
        <h2 className="text-2xl text-gray-700">This is the Title</h2>
        <p className="text-gray-400 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
          saepe aliquam pariatur rem consequuntur cupiditate iusto blanditiis!
          Magni, doloribus dolorum.
        </p>
      </div>
    </div>
  );
};
