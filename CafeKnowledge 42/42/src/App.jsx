
import { useState } from 'react'
import './App.css'
import Blog from './Components/Blogs/Blog'
import BookMark from './Components/BookMark/BookMark'
import Header from './Components/Header'

function App() {
  const[bookmark,setbookmark]=useState([])
  const [readingtime,setreadingtime]=useState(0)
  const handaleBookmark=blog=>{
    console.log('click the book mark');
   const newBlog=[...bookmark,blog]
   setbookmark(newBlog)
  }
const handalemarkasread=(reading_time,id)=>{
  console.log(id);
 const newReadingtime=readingtime+reading_time
 setreadingtime(newReadingtime)
// remove the read blog from bookmark
const reamingbookmarks=bookmark.filter(bookmark=>bookmark.id!==id)
setbookmark(reamingbookmarks)
}
  return (
    <>
    
    <Header></Header>
   <div className='md:flex container mx-auto'>
   <Blog handaleBookmark={handaleBookmark} handalemarkasread={handalemarkasread}></Blog>
   <BookMark bookmark={bookmark}
 readingtime={readingtime}
   ></BookMark>
   </div>
    </>
  )
}

export default App
