// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({ comments, updateWComments }) => {
  // Add state for the comments
  const [comment, setComment] = useState("");

  const submitComment = e => {
    e.preventDefault();

    const newValues = {
      username: "anonymous",
      text: comment
    };
    updateWComments(newValues);
    console.log(newValues);
  };

  const changeComment = e => {
    const val = ([e.target.name] = e.target.value);
    setComment(val);
  };

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((item, i) => (
        <Comment key={i} comment={item} />
      ))}
      <CommentInput
        onSubmit={submitComment}
        changeComment={changeComment}
        comment={comment}
      />
    </div>
  );
};

export default CommentSection;
