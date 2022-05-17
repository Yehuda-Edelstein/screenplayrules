import React, { useEffect, useState } from 'react';
import './style.index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Glossary(props) {  
    const [termList, setTermList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/glossary/')
        .then(res => res.json())
        .then(res => setTermList(res))
    }, [])

    return (
        <div>
            <div className='termSearch'>      
                <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />                
                <input placeholder='Search...'></input>
            </div>
            <div className='termList'> 
                {termList.map(term => 
                    (
                    <div className='termContainer'>
                        <div className='termName'>{term.name}</div>
                        <div className='termDefinition'>{term.definition}</div>
                        <div className='termExample'>{term.example}</div>
                        {/* <div className='termFooter'>
                            <div>Like/Dislike or Concerned?</div>
                            <div>Question</div>
                        </div> */}
                    </div>
                ))}
        </div>
            {/* <div className='nextPageFooter'>
                <div>Next...</div>
            </div> */}
       </div>
    );
}

export default Glossary;