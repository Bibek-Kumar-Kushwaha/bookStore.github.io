import React from 'react';

const Card = ({ book }) => {
    return (
        <div className="p-4">
            <div className="card bg-base-100 w-full shadow-xl hover:scale-105 duration-300">
                <figure>
                    <img
                        src={book.image}
                        alt={book.title}
                        className="object-cover w-full h-64"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {book.title}
                        <div className="badge badge-secondary">{book.category}</div>
                    </h2>
                    <p>{book.description}</p>
                    <div className="card-actions flex justify-between">
                        <div className="badge badge-outline p-3">${book.price}</div>
                        <button className="badge badge-outline hover:bg-pink-500 hover:text-white p-3">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
