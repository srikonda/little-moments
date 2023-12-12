import React from 'react'
import { FaStar } from "react-icons/fa";
import { HiMapPin } from 'react-icons/hi2';
import { IoMdCall } from 'react-icons/io';

interface CardProps {
    popular: boolean;
    heading: string;
    rating: string;
    date: string;
    title: string;
    price: string;
    location: string;
    phone: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ popular, heading, rating, date, title, price, location, phone, image }) => {
    return (
        <div className='rounded-lg bg-secondary border-2 border-primary drop-shadow-[10px_10px_0_rgba(0,0,0,1)]'>
            <div className='w-full h-[250px] rounded-lg group overflow-hidden relative'>
                <img src={image} alt="image2" className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" />
                {
                    popular && (
                        <div className='absolute top-4 right-4 bg-theme-color-4 border-2 border-primary p-1 px-2 rounded-full text-xs font-bold'>
                            Popular
                        </div>
                    )
                }
                <div className='absolute bottom-6 left-6 text-secondary font-anton font-extrabold text-2xl'>
                    {heading}
                </div>
            </div>
            <div className='p-2'>
                {/* <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <div className='text-yellow'>
                            <FaStar />
                        </div>
                        <div>
                            {rating}
                        </div>
                    </div>
                    <div>{date}</div>
                </div> */}
                <div className='font-bold'>
                    {title}
                </div>
                <div className='my-4 font-semibold'>
                    <div className='flex items-center gap-1'>
                        <HiMapPin />
                        {location}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card