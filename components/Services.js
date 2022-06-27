import React from "react";

const Services = () => {
  return (
    <section>
      <div className="text-center p-4 py-16 ">
        <h1 className="text-2xl uppercase text-primary pb-8">
          Services We provide
        </h1>
        <p className="max-w-4xl mx-auto pb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          enim, nihil vel neque deleniti, iste explicabo commodi illo ipsa
          corporis excepturi distinctio dicta quibusdam quo suscipit, autem
          expedita laboriosam quaerat repellat cumque soluta est dolores tempora
          officiis. Quas, molestiae numquam?
        </p>
        <div className="flex max-w-screen-xl mx-auto flex-col md:flex-row space-y-4">
          <div>
            <h3 className="uppercase">Consultancy</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae
              voluptatum atque enim eveniet facere officiis accusantium labore
              quidem explicabo.
            </p>
          </div>
          <div>
            <h3 className="uppercase">Marketing</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae
              voluptatum atque enim eveniet facere officiis accusantium labore
              quidem explicabo.
            </p>
          </div>
          <div>
            <h3 className="uppercase">Research</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae
              voluptatum atque enim eveniet facere officiis accusantium labore
              quidem explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
