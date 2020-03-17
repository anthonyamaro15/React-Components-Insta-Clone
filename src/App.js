/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import PostPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import mainData from "./dummy-data";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App

const App = () => {
  const [data, setData] = useState(mainData);

  const filteredData = arr => {
    if (arr) {
      return setData(arr);
    } else {
      return data;
    }
  };
  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar data={data} filteredData={filteredData} />
      <PostPage data={data} />
    </div>
  );
};

export default App;
