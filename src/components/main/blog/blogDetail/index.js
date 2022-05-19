import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'

function BlogDetail(props) {
    const [blog, setBlog] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch('http://localhost:8000/api/blogs/' + id)
        .then(res => res.json())
        .then(res => setBlog(res))
    }, [])

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
                    {/* <div className='termFooter'>
                        <div>Like/Dislike or Concerned?</div>
                        <div>Question</div>
                    </div> */}
                </div>
                <div>
                    <Link to='/blog'>BACK</Link>
                </div>
        </div>
    );
}

export default BlogDetail;