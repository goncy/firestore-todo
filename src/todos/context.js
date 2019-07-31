import React from 'react';

import Loading from './screens/Loading';

import api from './resources';

const TodosContext = React.createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);
  const [status, setStatus] = React.useState('init');

  const state = { todos, status };
  const actions = { create: api.create, update: api.update, remove: api.remove };

  React.useEffect(
    () =>
      api.onChange(todos => {
        setTodos(todos);
        setStatus('resolved');
      }),
    []
  );

  if (status === 'init') return <Loading />;

  return <TodosContext.Provider value={{ state, actions }}>{children}</TodosContext.Provider>;
};

export { TodosProvider as Provider, TodosContext as default };
