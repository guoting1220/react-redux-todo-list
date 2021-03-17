const INITIAL_STATE = {
  todos: JSON.parse(localStorage.getItem("todos")) || []
};

const rootReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTodoList = [...state.todos, action.newTask];
      localStorage.setItem("todos", JSON.stringify(newTodoList));
      return { ...state, todos: newTodoList};
    }

    case "DELETE_TASK": {
      const newTodoList = state.todos.filter(t => t.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(newTodoList));
      return { ...state, todos: newTodoList };
    }     
  
    default:
      return state;
  }
}

export default rootReducer;