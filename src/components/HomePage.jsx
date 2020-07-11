import React from 'react';
import { ListItem } from './ListItem';
export function HomePage(props) {
  return (
    <div className="App">
      { props.posts.map(p => <ListItem id={p.id} title={p.title} text={ p.text } author={ p.author } key={ p.id } />) }
    </div>
  );
};