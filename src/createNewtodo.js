/* eslint-disable import/no-extraneous-dependencies */
import { nanoid } from 'nanoid';

const createNewtodo = (
  title,
  description,
  category,
  completed,
  dueDate,
  priority
) => ({
  title,
  description,
  category,
  completed,
  dueDate,
  priority,
  id: nanoid(),
});

export default createNewtodo;
