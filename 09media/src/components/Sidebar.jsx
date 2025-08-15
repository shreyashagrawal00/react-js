import React from 'react';

const Sidebar = ({selectedTab,setSelectedTab}) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" 
          className={`nav-link text-white ${selectedTab==="Home" && "active"}`}
          onClick={()=>setSelectedTab("Home")}
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" 
          className={`nav-link text-white ${selectedTab==="Create Post" && "active"}`}
          onClick={()=>setSelectedTab("Create Post")}
          >
            Create Post
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
