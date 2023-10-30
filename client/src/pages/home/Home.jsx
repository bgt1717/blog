import React from 'react'
import { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import  "./home.css";
import axios from "axios"


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts")
      // console.log(res) // To see the posts in console log.
      setPosts(res.data)
    } 
    fetchPosts()
  }, [])

  return (
    <>
        <Header/>
        <div className="home">
            <Posts posts={posts}/>
            <Sidebar />
            
        </div>
   </>
  );
}
