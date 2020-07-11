import React, { useState } from 'react';
import { Route, BrowserRouter, Switch, Redirect, NavLink } from 'react-router-dom';
import { PostPage } from './components/PostPage';
import { HomePage } from "./components/HomePage"
import { AddPostPage } from './components/AddPostPage';

function App() {
  
  const [ posts, setPosts ] = useState([{id: 1, title: "Моя первая запись", text: "Здесь должно быть какое-то описание", author: "Андрей"},
  {id: 2, title: "Моя вторая запись", text: "Здесь должно быть какое-то описание", author: "Василий"},
  {id: 3, title: "Моя третья запись", text: "Здесь должно быть какое-то описание", author: "Михаил"}]);
  const addPost = (title, text, author) => {
    const newPost = {
      id: Date.now().toString(), title, text, author
    };
    setPosts(prev => [
      ...prev, newPost
    ])
  }
  return (
    <BrowserRouter>
    <div className="App">
      <nav className="navbar">
      <NavLink className="navbar__item" to="/add-post">Новая запись</NavLink>
      <NavLink className="navbar__item" to="/">Главная</NavLink>
      </nav>
      <Switch>
      <Route path={`/postPage/:id?`} render={ (routerProps)=> <PostPage {...routerProps}/> } />
      <Route exact path="/" render={ () => <HomePage posts={ posts } addPost={addPost} /> }/>
      <Route path="/add-post" render={() => <AddPostPage addPost={ addPost } />} />
      <Redirect to="/"/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
