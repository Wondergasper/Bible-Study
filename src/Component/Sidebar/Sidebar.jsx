// import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
   <div className="sidebar">
    <h2>Navigation</h2>
    <ul className=''>
    <li><a href="#home">Home</a></li>
        <li><a href="#questions">Questions</a></li>
        <li><a href="#communities">Communities</a></li>
        <li><a href="#most-answered">Most answered</a></li>
        <li><a href="#unanswered">Unanswered</a></li>
        <li><a href="#most-visited">Most visited</a></li>
        <li><a href="#polls">Polls</a></li>
        <li><a href="#faqs">FAQs</a></li>
        <li><a href="#groups">Groups</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#tags">Tags</a></li>
    </ul>

    
   </div>



  );
}

export default Sidebar;