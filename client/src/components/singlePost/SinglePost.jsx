import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className = "imgPost" src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i class="singlePostIcon far fa-trash-alt"></i>

                </div>
            
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: <b> Townsend</b></span>
                <span className="singlePostDate"> 1 hour ago </span>

            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi animi dignissimos, provident blanditiis incidunt 
                vel quidem sapiente ducimus! Adipisci, perspiciatis? Dolorem, 
                tempora laboriosam. Necessitatibus, atque perferendis. Distinctio,
                 inventore temporibus!orem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi animi dignissimos, provident blanditiis incidunt 
                vel quidem sapiente ducimus! Adipisci, perspiciatis? Dolorem, 
                tempora laboriosam. Necessitatibus, atque perferendis. Distinctio,
                 inventore temporibus!orem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi animi dignissimos, provident blanditiis incidunt 
                vel quidem sapiente ducimus! Adipisci, perspiciatis? Dolorem, 
                tempora laboriosam. Necessitatibus, atque perferendis. Distinctio,
                 inventore temporibus!orem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi animi dignissimos, provident blanditiis incidunt 
                vel quidem sapiente ducimus! Adipisci, perspiciatis? Dolorem, 
                tempora laboriosam. Necessitatibus, atque perferendis. Distinctio,
                 inventore temporibus!</p>
        </div>
      
    </div>
  )
}
