import React from 'react';
import { mainContext,useContext } from '../context';
import { useState,useEffect } from 'react';
import Usercard from './Usercard';
import Repocard from './Repocard';

const Profilecard = () => {
    const {user,appendMethods} =useContext(mainContext);
    const [repo,setRepo] = useState(false);
    useEffect(()=>{
      appendMethods({setRepo})
    },[repo])
  return (
      <>
        {(user??[])=="" ? "" : (repo==true ? <Repocard/> :<Usercard/>)}
      </>
  );
};

export default Profilecard;
