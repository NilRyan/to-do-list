import { nanoid } from 'nanoid';

const renderProjects = (projects) => {
  const container = document.querySelector('.projects');

  projects.forEach((item) => {
    const project = document.createElement('li');
    project.setAttribute('data-id', nanoid());
    project.textContent = item;
    const del = document.createElement('button');
    project.appendChild(del);

    container.appendChild(project);
  });
};

export default renderProjects;
