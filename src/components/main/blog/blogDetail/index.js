import React, {useEffect, useState} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

function BlogDetail(props) {
    const [blog, setBlog] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch('http://localhost:8000/api/blogs/' + id)
        .then(res => res.json())
        .then(res => setBlog(res))
    }, [])

    function deleteBlog() {
        fetch('http://localhost:8000/api/blogs/' + id, {
            "method":"DELETE",
        })
        .then(navigate('/blog'))
    }

    return (
        <div>
            <div>
                <div className='blogHeader'>
                    <div>{blog.title}</div>
                    <div>by {blog.author_name}</div>
                    {/* clean up time */}
                    <div>{blog.date_posted}</div>
                 </div>
                    <div className='blogExample'>{blog.body}</div>
                    <div className='termFooter'>
                        {/* <div>Like/Dislike or Concerned?</div>
                        <div>Question</div> */}
                        <div><Link to='edit'>EDIT</Link></div> 
                        {/* have a modal pop up and ask if you're sure */}
                        <div onClick={deleteBlog}>DELETE</div>        
                    </div>
                </div>
                <div><Link to='/blog'>BACK</Link></div>
        </div>
    );
}

export default BlogDetail;