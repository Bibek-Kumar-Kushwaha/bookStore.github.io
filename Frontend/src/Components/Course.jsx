import React from 'react';
import Card from './Card';
import list from '../../public/list.json';
import { Link } from 'react-router-dom';
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">
              Here! :)
            </span>
          </h1>

          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi soluta inventore laborum ex iure perspiciatis, facilis, minus velit aliquid doloribus quaerat, eveniet magni? Vero, obcaecati? Est porro reiciendis cum.
            At illum ipsam sed nemo. Odio ratione, excepturi et consectetur libero accusantium eaque rerum commodi. Eius deleniti minus deserunt omnis libero sit repellendus quae explicabo, modi odio, quis ut optio!
          </p>

          <Link to='/' >
          <button className="bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>

        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((item) => (
            <Card key={item.id} book={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
