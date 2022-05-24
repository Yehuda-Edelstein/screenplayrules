import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewBlog(props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()
    
    function postBlog() {
        fetch('http://localhost:8000/api/blogs/', {
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify({
                "title": title,
                // will have to make author, user
                "author": 1,
                "body": body
            }),
            "method":"POST",
        })
        // change location to new posted blog after submit.        
        // .then(response => response.json())
        // .then(data => {
        //   navigate(`/blog/${data.uuid}`) 
        // })

        // for now
        .then(navigate('/blog'))       
    }

    return (
        <div>
            <form onSubmit={postBlog}>
            <textarea className='title' placeholder='title...' onChange={(ev) => setTitle(ev.target.value)} value={title} required></textarea>
            <textarea className='body' placeholder='' onChange={(ev) => setBody(ev.target.value)} value={body} required></textarea>
            <button>POST</button>
            </form>
            <div>
                <Link to='/blog'>BACK</Link>
            </div>
        </div>
    );
}

export default NewBlog;