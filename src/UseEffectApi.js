import React, { useState, useEffect } from "react";
import Loading from "./github/loading";
import Githubusers from "./github/githubusers";

const UseEffectApi = () => {

  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState ([]);

  const getUsers =async() => {
    try{
      setLoading(false);
      const response =await fetch('https://api.github.com/users');
      setUsers(await response.json());

    }catch(error){
      setLoading(false);
        console.log("my error is" + error);
    }
      
  }

  useEffect(() => {
    getUsers ();
  },[]);
  if(loading){
    return <Loading />
  }
  return (
    <>
      <Githubusers  users ={users}/>
    </>
  );
};

export default UseEffectApi;
