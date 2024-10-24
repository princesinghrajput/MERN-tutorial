import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)

    useEffect(()=>{
        const fetchBlogData= async()=>{
            const response = await fetch("https://dummyjson.com/posts")
            const data = await response.json();
            setBlogs(data.posts);        
        }

        fetchBlogData();
    }, [])


  return (
    <div>
        {blogs.map((blog)=>{
            return (
                <div key={blog.id}>
                    <div className='p-2 hover:bg-red-500 cursor-pointer'>

                        <Link to={`/blog/${blog.id}`}>
                        <h2 className='text-2xl font-bold text-blue-300'>{blog.title}</h2>
                        </Link>

                       
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Blog