import Post from "./Post";
// import "./posts.scss";
import {useQuery} from 'react-query'
import { makeRequest } from "../../axios";
import { useEffect, useState } from "react";

const OthersPosts = (params) => {

  const [data2, setData] = useState([])
  
  const {isLoading, error, data}=useQuery(['posts'], ()=>
  makeRequest.get(`/posts/${params.username}`).then((res)=>{
    return res.data
  })
  )

  useEffect(() => {
    fetch(`http://localhost:8800/api/posts/${params.username}`).then(res => res.json()).then(data => {
        console.log(data);
        setData(data);
    });
}, [])


  return <div className="posts">
    {error ? "Something went wrong!" : (isLoading? "loading" : data.map(post=>(
      <Post post={post} key={post.id}/>
    )))}
  </div>;
};

export default OthersPosts;
