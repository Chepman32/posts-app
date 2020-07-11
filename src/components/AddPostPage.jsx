import React, { useState } from "react";
export const AddPostPage = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const  addPostHandler = () => {
    if(titleValidator() && textValidator() && authorValidator()) {
      props.addPost(title, text, author);
    setTitle("");
    setText("");
    setAuthor();
    }
    else {
alert("Заполните все поля")
    }
  };
  const titleValidator =() => {
    if(title.trim()) {
      return true;
    }
    else {
      return false;
    }
  };
  const textValidator =() => {
    if(text.trim()) {
      return true;
    }
    else {
      return false;
    }
  };
  const authorValidator =() => {
    if(author.trim()) {
      return true;
    }
    else {
      return false;
    }
  };
  return (
    <div className="addPost">
      <input type="text" className="addPost__input titleInput" value={ title } placeholder="введите заголовок" onChange={ e => setTitle(e.target.value) } />
      <input type="text" className="addPost__input textInput" value={ text } placeholder="введите текст поста" onChange={ e => setText(e.target.value) } />
      <input type="text" className="addPost__input authorInput" value={ author } placeholder="введите имя автора" onChange={ e => setAuthor(e.target.value) } />
      <button onClick= {(e) => addPostHandler(e)}>Add</button>
    </div>
  );
};