import React from 'react'
import "./post.css"

export default function Post({post}) {
  return (
    <div className="post">
        <img className ="img" src="https://img.freepik.com/free-photo/reflection-lights-mountain-lake-captured-parco-ciani-lugano-switzerland_181624-24209.jpg?w=1380&t=st=1691521241~exp=1691521841~hmac=eb4a987bfa47aa8574d907616f80303cd8c67978405870794e14e9d96147c34b"
        alt=""> 
        </img>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">{post.title}</span>
           {/* hr/ adds a line */}
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className = "postDesc" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        </p> 


    </div>
  )
}
