import React from 'react'
import Image from 'next/image'
import Badge from './Badge'

interface ICardProps {
    title: string;
    description: string;
    badgeText: string 
}
const Card: React.FC<ICardProps> = ({title, description, badgeText}) => {
  return (
    <div className='w-full rounded-md relative my-8'>
        <div className='group overflow-hidden rounded-md border-2 border-primary  drop-shadow-[5px_5px_0_rgba(0,0,0,1)] '>
            <Image 
            className='group-hover:scale-110 transition-transform duration-300'
            src='https://images.pexels.com/photos/16143559/pexels-photo-16143559/free-photo-of-landscape-of-rocky-snowcapped-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
            width={500}
            height={500}
            objectFit='cover'
            alt='image1' />
        </div>
         <div className='absolute -top-3 right-3'>
            <Badge text={badgeText} />
         </div>
         <div className='absolute text-secondary bottom-1 p-3'>
            <div className='sm:text-2xl font-bold'>
                {title}
            </div>
            <div className='text-sm'>
                {description}
            </div>
         </div>
    </div>
  )
}

export default Card