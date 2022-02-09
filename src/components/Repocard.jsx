import React from 'react'
import { mainContext,useContext } from '../context'
import {FaStar} from "react-icons/fa"
import {BiGitRepoForked} from "react-icons/bi"


const Repocard = () => {
    const {repos} = useContext(mainContext);
  return (
    <div className='repo-flex'>
        {(repos?? []).map((item,index)=>(
          <div key={index} className="repo-card">
            <a href={item.html_url} target="_blank" className='repo-name'>{item.name}</a>
            <BiGitRepoForked className='repo-fork'/>
            <p className='text' >{item.forks_count}</p>
            <FaStar className='repo-star' />
            <p className='text'>{item.watchers_count}</p>
            <p className='text'>{item.language}</p>
          </div>
        ))}
    </div>
  );
}

export default Repocard