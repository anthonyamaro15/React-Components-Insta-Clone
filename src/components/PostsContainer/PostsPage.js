//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import mainData from "../../dummy-data";
// import data

const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState(mainData);
  console.log(data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map((user, i) => (
        <Post key={i} post={user} />
      ))}
    </div>
  );
};

export default PostsPage;
