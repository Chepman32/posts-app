import React from "react";
import { NavLink } from "react-router-dom";
export const ListItem = (props) => {
  return (
    <div className="listItem">
      <h3 className="listItem__title">{ props.title } </h3>
      <p className="listItem__text">{ props.text } </p>
      <h5 className="listItem author">{ props.author } </h5>
      <NavLink to={`/postPage/id/${props.id}`}>go to post</NavLink>
    </div>
  )
}