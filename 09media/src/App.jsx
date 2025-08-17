import { useState } from 'react';
import './App.css'
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Fotter from './components/Fotter';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import AllList from './components/AllList';
import PostListProvider from "./store/Post-list-store";


function App() {

  const [selectedTab,setSelectedTab]=useState("Home");
  
  return (
 
    <PostListProvider>
    <div className="appContainer">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    <div className="content">
    <Header/>
   {
     selectedTab==="Home" ? <AllList/> : <CreatePost/>
   } 
    <Fotter/>
    </div>
    </div>
    </PostListProvider>
     
  )
}

export default App
