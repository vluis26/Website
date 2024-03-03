import React from 'react';

function PortfolioItem({title, imgUrl, stack, description}){
    return (
        <div className='border-2 border-stone-900 rounded-md overflow-hidden my-10'>
            <img 
                src={imgUrl} 
                alt="portfolio"
                className='w-full h-36 md:h-48'
            />
            <div className='w-full p-4'>
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
                <p className='text-sm md:text-md mb-2 md:mb-3 w-34'>{description}</p>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                    {stack.map(item => (
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;