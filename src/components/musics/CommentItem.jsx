import React from 'react';

const CommentItem = ({item}) => {
    console.log(item.comment, 'dhsg')
    return (
        <div>
            <p className='text-white text-[20px]'>{item.comment}</p>   
            <p className='text-white text-[20px]'>{item.id}</p> 
        </div>   
    );
};

export default CommentItem;