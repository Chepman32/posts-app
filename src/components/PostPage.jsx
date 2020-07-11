import React from "react";
export const PostPage =(props) => {
  return (
<div className="postPage">
  <title>{ props.location.pageProps.title } </title>
  <h1>{props.location.pageProps.text } </h1>
  <h2 className="postPage__author">{props.location.pageProps.author} </h2>
</div>
  )
}