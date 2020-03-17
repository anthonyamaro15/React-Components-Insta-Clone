// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = ({ post }) => {
  // set up state for the likes
  const [likes, setLikes] = useState(post.likes);
  const [arrComment, setArrComment] = useState(post.comments);

  const updateLikes = () => {
    setLikes(likes + 1);
  };

  // this function creates new comments and add them to the data.
  const updateWComments = comm => {
    const newArr = [...arrComment, comm];
    setArrComment(newArr);
  };

  return (
    <div className="post-border">
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={post.imageUrl} />
      </div>
      <LikeSection likes={likes} updateLikes={updateLikes} />
      <CommentSection
        postId={post.imageUrl}
        comments={arrComment}
        updateWComments={updateWComments}
      />
    </div>
  );
};

export default Post;
