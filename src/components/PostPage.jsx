import React from "react";
export const PostPage =(props) => {
  return (
<div className="postPage">
  <h1>{props.location.pageProps.text} </h1>
  <h3>pageProps </h3>
  <h2 className="postPage__author">{props.location.pageProps.title} </h2>
</div>
  )
}