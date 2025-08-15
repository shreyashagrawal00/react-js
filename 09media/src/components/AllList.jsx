import React, { useContext } from 'react'
import Post from './Post';
import { PostList} from "../store/Post-list-store";

function AllList() {
   const  {postList}=useContext(PostList);
   console.log(postList)

  return (
    <>
    {postList.map((post)=><Post key={post.id} post={post} />)}
    
    </>
  );
}

export default AllList;
