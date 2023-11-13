import React from 'react'
import "./post.css"
import { Link } from 'react-router-dom'

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  // Truncate description to 200 characters
  const truncatedDesc = post.desc.length > 200 ? `${post.desc.substring(0, 200)}...` : post.desc;

  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat" key={c.name}>
              {c.name}
            </span>
          ))}
        </div>

        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        {/* <hr /> */}
        
      </div>
      <p className="postDesc">{truncatedDesc}</p>
    </div>
  );
}

