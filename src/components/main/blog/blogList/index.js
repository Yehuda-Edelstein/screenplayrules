import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.index.scss'

function BlogList(props) {
    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/blogs/')
        .then(res => res.json())
        .then(res => setBlogList(res))
    }, [])

    return (
        <div>
            <Link to='new'>New Blog</Link>
            <div className='blogList'> 
                {blogList.reverse().map(blog => 
                    (
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/blog/${blog.uuid}`} key={blog.uuid}><div className='blogContainer'>
                        <div className='blogHeader'>
                            <div>{blog.title}</div>
                            <div>by {blog.author_name}</div>
                            {/* clean up time */}
                            <div>{blog.date_posted}</div>
                        </div>

                        <div className='blogExample'>{blog.body}</div>
                        {/* <div className='termFooter'>
                            <div>Like/Dislike or Concerned?</div>
                            <div>Question</div>
                        </div> */}
                    </div>
                </Link>
                ))}        
            </div>
        </div>
    );
}

export default BlogList;