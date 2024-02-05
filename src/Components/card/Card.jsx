import React from 'react'

function Card({image, name, description, price, id, discount}) {
  return (
    <div id={id} className='w-full md:w-1/4 sm:w-1/3 lg:w-1/5 h-[450px] md:h-[500px] m-4 box-border overflow-hidden text-center hover:shadow-gray-400 dark:hover:shadow-gray-700 transition-all duration-300 hover:shadow-2xl border-lime-500 rounded-xl border-2 dark:bg-gray-900 bg-gray-50'>
        <div className='w-full h-60 object-cover overflow-hidden'>
            <img src={image} alt={name} className='h-60 w-full object-cover hover:scale-110 transition-all duration-200' />
        </div>
        <div>
            <h1 className='mt-4 text-2xl font-semibold capitalize'>{name}</h1>
        </div>
        <div>
            <p className=' text-base px-2 mt-6 text-gray-700 dark:text-gray-400 text-ellipsis'>{description}</p>
        </div>
        <div className='text-base mt-4 text-red-600'>
            <span className='line-through'>{price} </span>{" "}
            <span className='text-green-600'> {discount && (price - (price*discount / 100)).toFixed(2)}</span>
        </div>
        <div>
            <button className='text-base font-semibold mt-3 px-8 py-1 rounded-lg border-2 border-lime-500 text-lime-500 hover:border-amber-400 hover:text-amber-400'>Add To Cart</button>
        </div>
    </div>
  )
}

export default Card
