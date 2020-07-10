import React from "react";
export const AddPostPage = (props) => {
  const  addPostHandler = event => {
    props.addPost(event.target.value);
  }
  return (
    <div className="addPost">
      <input type="text" className="addPost__input" placeholder="введите заголовок"/>
      <button onClick= {(e) => addPostHandler(e)}>Add</button>
    </div>
  )
}