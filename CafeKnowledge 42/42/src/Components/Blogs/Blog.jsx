import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "./SingleBlog";


const Blog = ({id,handaleBookmark,handalemarkasread}) => {

   const [blogs,setblogs]=useState([])
   useEffect(()=>{
 fetch("blog.json")
 .then(res=>res.json())
 .then(data=>setblogs(data))

   },[])
    return (
        <div className="md:w-2/3 mt-5">
 <h1 className="text-4xl mt-5">Blogs</h1>
          <div className="mt-5">
          {
blogs.map(blog=> <SingleBlog key={blog.id}  
  blog={blog}
  handaleBookmark={handaleBookmark}
  handalemarkasread={handalemarkasread}
  ></SingleBlog>)
            }
          </div>
        </div>
    );
};

export default Blog;