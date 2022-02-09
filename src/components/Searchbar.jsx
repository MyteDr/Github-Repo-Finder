import React from 'react';
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { mainContext,useContext} from '../context';
import { toast } from 'react-toastify';
import {FaSearch} from "react-icons/fa"
const Searchbar = () => {
    const [text,setText] = useState("");
    const [user,setUser] = useState("");
    const {appendMethods,setRepo} =useContext(mainContext);
    useEffect(()=>{
        appendMethods({user});
    },[user])
  return (
      <div className="search">
          <input className='search-input' onChange={(e)=>{setText(e.target.value.replace(" ",""))}} value={text} type="text" placeholder='Enter Name...' />
          <button onClick={async(e)=>{
              e.preventDefault();
              if(text=="")
              {
                toast.error("Do not leave the field blank")
              }
              else{
                  setRepo(false);
                  setText("");
                  await axios.get(`https://api.github.com/users/${text}`).then(res =>setUser(res.data))
                  .catch(err=>{toast.error("Not Found")});
              }
          }} className='search-btn'><FaSearch className='search-btn-logo'/></button>
      </div>
  );
};

export default Searchbar;
