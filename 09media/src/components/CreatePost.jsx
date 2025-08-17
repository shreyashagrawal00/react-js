import React, { useContext, useRef } from 'react'
import { PostList } from '../store/Post-list-store';

const CreatePost = () => {
  
  const {addPost}=useContext(PostList);

  const userIdElement=useRef();
  const titleElement=useRef();
  const bodyElement=useRef();
  const reactionElement=useRef();
  const tagsElement=useRef();

  const handleSumbit=(e)=>{
    e.preventDefault();

    const userId=userIdElement.current.value;
    const title=titleElement.current.value;
    const body=bodyElement.current.value;
    const reaction=reactionElement.current.value;
    const tags=tagsElement.current.value.split(" ");
    addPost(userId,title,body,reaction,tags);

    userIdElement.current.value="";
    titleElement.current.value="";
    bodyElement.current.value="";
    reactionElement.current.value="";
    tagsElement.current.value="";

  };


  return (
    <>
  <form className='createPost' onSubmit={handleSumbit}>
    <div class="mb-3">
      <label htmlFor="userId" class="form-label">
      Enter UserId</label>
      <input type="text" 
      class="form-control" 
      id="userId"
      ref={userIdElement}
      placeholder='Enter your userId'/>
      <div id="emailHelp" class="form-text"></div>
    </div>

    <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={titleElement}
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body Content
        </label>
        <textarea rows={4}
          type="text"
          className="form-control"
          id="body"
          ref={bodyElement}
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionElement}
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>

      
    
    <button type="submit" class="btn btn-primary">Post</button>
  </form>
    </>
  )
}

export default CreatePost;