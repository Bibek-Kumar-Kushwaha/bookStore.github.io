import React from 'react';
import banner from '../../public/Book.jpg'; // Ensure the correct path to the image

const Banner = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center">
            <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
                <div className="space-y-6 md:space-y-12">
                    <h1 className="font-bold text-2xl md:text-4xl">
                        Hello, Welcome here to learn something
                        <span className="text-pink-500"> new everyday!!!</span>
                    </h1>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur fugit aliquam aspernatur optio repellat dicta vel laboriosam eveniet odio iusto, nisi libero consectetur quae beatae! Velit aut laboriosam reprehenderit.
                    </p>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" className="grow" placeholder="Email" />
                    </label>
                    <button className="mt-4 md:mt-6 btn btn-secondary">Subscribe</button>
                </div>
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end mt-8 md:mt-0">
                <img src={banner} alt="book" className="w-60 h-80 md:w-80 md:h-92 object-cover rounded-md shadow-md" />
            </div>
        </div>
    );
};

export default Banner;
