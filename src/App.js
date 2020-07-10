import React, { useState } from 'react';
import { ListItem } from './components/ListItem';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { PostPage } from './components/PostPage';
import { HomePage } from "./components/HomePage"

function App() {
  
  const [ posts, setPosts ] = useState([{id: 1, title: "Моя первая запись", text: "Здесь должно быть какое-то описание", author: "John"},
  {id: 2, title: "Моя первая запись", text: "Здесь должно быть какое-то описание", author: "John"},
  {id: 3, title: "Моя первая запись", text: "Здесь должно быть какое-то описание", author: "John"}])
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path="/postPage/:id?" render={ ()=> <PostPage/> } />
      <Route exact path="/" render={ () => <HomePage posts={ posts }/> }/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
