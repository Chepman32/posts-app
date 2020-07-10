import React from 'react';
import { ListItem } from './ListItem';
import { NavLink } from 'react-router-dom';
export function HomePage(props) {
  return (
    <div className="App">
      <NavLink to="add-post">AddPost</NavLink>
      { props.posts.map(p => <ListItem id={p.id} title={p.title} text={ p.text } author={ p.author } key={ p.id } />) }
    </div>
  );
};