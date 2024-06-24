import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json';
import Card from './Card';

const Freebook = () => {
    const filterData = list.filter((data) => data.category === "Free");

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1600, // Large devices
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024, // Medium devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Small devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mb-8">
                <h1 className="font-semibold pb-2 text-xl">Free Book Offer</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed asperiores qui dolores quaerat blanditiis accusamus veritatis consectetur, aliquid quam maiores dolorum, necessitatibus fuga ipsum cupiditate placeat impedit eligendi sapiente! Animi sunt blanditiis sed natus laborum, nesciunt provident accusamus enim totam deserunt. Necessitatibus quod quidem nesciunt vel autem ipsum atque totam impedit, numquam, veniam quisquam eaque rerum vero molestiae dolore.
                </p>
            </div>
            <div>
                <Slider {...settings}>
                    {filterData.map((item) => (
                        <Card key={item.id} book={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Freebook;
