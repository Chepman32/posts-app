import React, { useEffect } from 'react';
import { ListItem } from './ListItem';
export function HomePage(props) {
  useEffect(() => {
    document.title = "Главная"
  });
  return (
    <div className="App">
      { props.posts.map(p => <ListItem id={p.id} title={p.title} text={ p.text } author={ p.author } key={ p.id } />) }
    </div>
  );
};