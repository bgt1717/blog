import React from 'react'
import { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import  "./home.css";
import axios from "axios"
import { useLocation } from 'react-router-dom';


export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();


  //You're using the useEffect hook to perform a network request when the search parameter changes. 
  //This ensures that when the search parameter in the URL changes, the component re-renders and fetches new posts.
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts" + search);
      // console.log(res) // To see the posts in console log.
      setPosts(res.data)
    } 
    fetchPosts();
  }, [search]);

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
