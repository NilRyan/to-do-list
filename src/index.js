import render from './render';

const todos = [
  {
    id: 1,
    title: 'Do a thing',
    description: 'just do it',
    category: 'Project 1',
    completed: false,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'low',
  },
  {
    id: 2,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Grocery',
    completed: false,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Project 2',
    completed: false,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'medium',
  },
  {
    id: 4,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Grocery',
    completed: true,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'high',
  },
  {
    id: 5,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Grocery',
    completed: false,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'low',
  },
  {
    id: 6,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Grocery',
    completed: true,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'medium',
  },
];

render(todos, 'Grocery');
