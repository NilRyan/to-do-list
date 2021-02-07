const renderHeader = (categ) => {
  const container = document.querySelector('.task-list');
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = `
  <h2 id = "header-category">${categ}</h2>
  <select class = "sort" name="sort">
    <option value="due">Date Due</option>
    <option value="completed">Completed</option>
    <option value="priority">Priority</option>
  </select>
</div>`;
  container.appendChild(header);
};

export default renderHeader;
