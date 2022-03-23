import React,{useState} from 'react'
import {useQuery} from 'react-query'
import axios from "axios";
function Example() {
    /*const {isLoading, error, data} = useQuery('repoData',function(){
        fetch('https://api.github.com/repos/tannerlinsley/react-query')
        .then(function(res){console.log(res);return res.json()})
    })
    {data.id}
          <h1>{data.name}</h1>
          <p>{data.description}</p>
       <strong>👀 {data.subscribers_count}</strong>{' '}
       <strong>✨ {data.stargazers_count}</strong>{' '}
       <strong>🍴 {data.forks_count}</strong>*/
    
       
  /*
       const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
       axios.get(
         "https://api.github.com/repos/tannerlinsley/react-query"
       ).then((res) => res.data)
     );*/
     

    const fetchTodoList =  function(){return  fetch("https://api.github.com/repos/tannerlinsley/react-query")
    .then(function(res){return res.json()})}
     const {isLoading, error, data, isFetching} = useQuery('repoData',fetchTodoList)
   
     if (isLoading) return "Loading...";
   
     if (error) return "An error has occurred: " + error.message;
   
     return (
       <div>
         <h1>{data.name}</h1>
         <p>{data.description}</p>
         <strong>👀 {data.subscribers_count}</strong>{" "}
         <strong>✨ {data.stargazers_count}</strong>{" "}
         <strong>🍴 {data.forks_count}</strong>
         <div>{isFetching ? "Updating..." : ""}</div>
       </div>
     );
}

export default Example