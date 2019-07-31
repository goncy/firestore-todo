import React from 'react';

import TodosContext from './context';

export function useTodos() {
  const {
    state: { todos },
  } = React.useContext(TodosContext);

  return todos;
}

export function useTodosActions() {
  const { actions } = React.useContext(TodosContext);

  return actions;
}
