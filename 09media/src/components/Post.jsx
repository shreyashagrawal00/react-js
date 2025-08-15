import React, { useContext } from 'react'
import {MdDelete} from 'react-icons/md';
import { PostList } from '../store/Post-list-store';

const Post = ({post}) => {

 const {deletePost} = useContext(PostList);

  return (
    <>
        <div class="card post-card" style={{width: "35rem"}}>
        {/* <img src="..." class="card-img-top" alt="..."/> */}
        <div class="card-body">
        <h5 class="card-title">{post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={()=>deletePost(post.id)}
          >
          <MdDelete />
          
          </span>
        </h5>
        <p class="card-text">{post.body}</p>
        {post.tags.map((tag)=><span key={tag} class="badge text-bg-primary tag">{tag}</span>)}
        <div class="alert alert-success reaction " role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
        
        </div>
        </div> 
    </>
  )
}

export default Post
