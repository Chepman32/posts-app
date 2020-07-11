let initialState = {
  posts: [{id: 1, title: "Моя первая запись", text: "Здесь должно быть какое-то описание", author: "John"},
  {id: 2, title: "Моя вторая запись", text: "Здесь должно быть какое-то описание", author: "John"},
  {id: 3, title: "Моя третья запись", text: "Здесь должно быть какое-то описание", author: "John"}]
}
const addPostReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state, posts: [...state.posts, {
          id: Date.now().toString(),
          title: action.title, text: action.text,
          author: action.author
        }]
      };
      Ddefault:
      return state;
  };
};
const ADD_POST = "ADD_POST";
export const addPostActionCreator  = (title, text, author) => ({ type: ADD_POST, title, text, author });