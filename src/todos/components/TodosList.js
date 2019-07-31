import React from 'react';

import { useTodos, useTodosActions } from '../hooks';

const TodosList = () => {
  const todos = useTodos();
  const actions = useTodosActions();

  function handleRemove(id) {
    actions.remove(id);
  }

  return (
    <div className="content">
      <ol style={{ fontSize: 20, lineHeight: 1.2 }}>
        {todos.map(({ id, data }) => (
          <li key={id}>
            {data}{' '}
            <button className="button is-danger is-small" onClick={() => handleRemove(id)}>
              X
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodosList;
