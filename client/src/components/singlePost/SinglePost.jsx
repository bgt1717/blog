import React from 'react'
import "./singlePost.css"
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SinglePost() {
    const location = useLocation()
    // console.log(location.pathname.split("/")[2])
    const path = location.pathname.split("/")[2]
    const[post, setPost] =useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            // console.log(res)
            setPost(res.data)
        };
        getPost()
    }, [path]);
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img  
                src={post.photo}
                alt="" 
                className="singlePostItem"
            />
          )}
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i class="singlePostIcon far fa-trash-alt"></i>

                </div>
            
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: <b> {post.username}</b>
                Author:
                    <Link to={`/?user=${post.username}`} className="link">
                    <b>{post.username} </b>
                    </Link>
                </span>
                <span className="singlePostDate"> 
                {new Date(post.createdAt).toDateString()} 
                 </span>

            </div>
            <p className="singlePostDesc">
                {post.desc}
            </p>
        </div>
      
    </div>
  )
}
