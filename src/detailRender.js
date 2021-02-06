import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#due-date');
const priority = document.querySelector('#priority');

const detailRender = (todos, id) => {
  const todoDisplayed = todos.filter((todo) => todo.id == id);
  title.value = todoDisplayed[0].title;
  description.value = todoDisplayed[0].description;
  date.value = format(parseISO(todoDisplayed[0].dueDate), 'yyyy-mm-dd');
  priority.value = todoDisplayed[0].priority;
  console.log(format(parseISO(todoDisplayed[0].dueDate), 'yyyy-mm-dd'));
};
export default detailRender;
