import React, { useContext } from 'react'
import Post from './Post';
import { PostList} from "../store/Post-list-store";
import WelcomeMsg from './welcomeMsg';

function AllList() {
   const  {postList}=useContext(PostList);
  
  return (
    <>
    {postList.length === 0 && <WelcomeMsg/>}
    {postList.map((post)=><Post key={post.id} post={post} />)}
    
    </>
  );
}

export default AllList;
