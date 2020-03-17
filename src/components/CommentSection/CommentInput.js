// You do not need to do anything in this file
import React from "react";

const CommentInput = ({ onSubmit, comment, changeComment }) => {
  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <input
        type="text"
        value={comment}
        name="comment"
        placeholder="Add comment... "
        onChange={changeComment}
      />
    </form>
  );
};

export default CommentInput;
