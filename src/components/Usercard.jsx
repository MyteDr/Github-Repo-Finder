import React from 'react'
import { mainContext,useContext } from '../context';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Usercard = () => {
    const {user,setRepo,appendMethods} =useContext(mainContext);
    const [repos,setRepos] = useState("");
    useEffect(()=>{
      appendMethods({repos})
    },[repos])
  return (
    <div className="card">
        <img className='card-img' src={(user??[]).avatar_url} alt="" />
        <div className='card-right'>
            <h1 className='card-text'>{(user??[]).name}</h1>
            <h1 className='card-text2'>{(user??[]).login}</h1>
            <button onClick={async (e)=>{
              e.preventDefault();
              await axios.get(`https://api.github.com/users/${(user??[]).login}/repos`).then(res =>setRepos(res.data))
              setRepo(true);
            }} className='repos'>Repos</button>
        </div>
    </div>
  )
}

export default Usercard