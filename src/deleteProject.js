const deleteProject = (projects, name) =>
  projects.filter((project) => project !== name);

export default deleteProject;
