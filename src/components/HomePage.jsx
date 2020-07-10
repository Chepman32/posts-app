import React, { useState } from 'react';
import { ListItem } from './ListItem';

export function HomePage(props) {
  
  let posts = [{id: 1, title: "Моя первая запись", text: "Здесь должно быть какое-то описание", author: "John"},
  {id: 2, title: "Моя первая запись", text: "Здесь должно быть какое-то описание", author: "John"},
  {id: 3, title: "Моя первая запись", text: "Здесь должно быть какое-то описание", author: "John"}]
  return (
    <div className="App">
      { props.posts.map(p => <ListItem id={p.id} title={p.title} text={ p.text } author={ p.author } key={ p.id } />) }
    </div>
  );
};