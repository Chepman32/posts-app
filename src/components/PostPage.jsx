import React, { useEffect } from "react";
export const PostPage =(props) => {
  useEffect(() => {
    console.log(props)
  }, [])
  return (
<div className="postPage">
  <h1>props.title </h1>
  <h3>{ props.text } </h3>
  <h2 classname="postPage__author">{props.author} </h2>
</div>
  )
}