import React from 'react';

const FavoriteItem = ({item}) => {
    return (
        <div className='relative'>
            <img src={item.image} alt="" className='w-[210px] h-[210px] rounded-[20px] bg-gray-500 mr-8 mb-8'/>
            <p className='absolute top-36 left-4 text-[24px] text-white font-normal'>{item.name}</p>
            <p className='absolute top-44 left-4 text-[12px] text-white font-normal'>{item.author}</p>
        </div>
    );
};

export default FavoriteItem;