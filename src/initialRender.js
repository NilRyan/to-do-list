const initialRender = () => {
  renderProjects(JSON.parse(localStorage.getItem('projects') || '[]'));
  renderHeader(projects.children[0].textContent);
  renderTodo(
    JSON.parse(localStorage.getItem('todos') || '[]'),
    projects.children[0].textContent
  );
};
