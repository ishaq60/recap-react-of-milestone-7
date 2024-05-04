import React from 'react';
import SingleBookMark from './SingleBookMark';

const BookMark = ({bookmark,readingtime}) => {
    console.log(bookmark);
    return (
        
        <div className='md:w-1/3 bg-gray-200 ml-4 text-center mt-3 rounded-xl'>
           <h1>Readingtime:{readingtime}min</h1>
            <h1 className='font-bold'>Book Marked Blog: {bookmark.length}</h1>
            {
                bookmark.map(bookmark=><SingleBookMark  
                    
                    bookmark={bookmark}></SingleBookMark>)
            }
        </div>
    );
};

export default BookMark;