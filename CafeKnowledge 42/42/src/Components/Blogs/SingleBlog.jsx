import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const SingleBlog = ({blog,handaleBookmark,handalemarkasread}) => {
    const {author_img,cover,post_date,title,reading_time,hashtags,id}=blog
    console.log(blog);
    return (
        <div>
          <img className='w-[350px]' src={cover} alt="" />
          <h1>{title}</h1>
          <div className='flex gap-10'>
            
            <div className='flex gap-2'>
                
                <img className='w-[30px]' src="images/boy1.png" alt="" />
                <div>
                <h2>Raju</h2>
                <p>{post_date}</p>
                </div>
                
            </div>
            <div className='flex gap-2'>
             <div className='flex gap-3'>
             <p>{reading_time}min</p>
                <button onClick={()=>handaleBookmark(blog)}  className='mb-5'><CiBookmark /> </button>
                <p className='mt-2'></p>
             </div>
            </div>
         
          </div>
         <div className='flex'>
         <p>{hashtags[0]}</p>
          <p>{hashtags[1]}</p>
          <p>{hashtags[2]}</p>
         </div>
         <button onClick={()=>handalemarkasread(reading_time,id)}>mark as read</button>
        </div>
    );
};

SingleBlog.PropTypes={
singleblog:PropTypes.object.isRequired
}
export default SingleBlog;