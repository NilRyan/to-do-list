const deleteTodo = (todos, category, by) =>
  todos.filter((todo) => todo[category] !== by);

export default deleteTodo;
