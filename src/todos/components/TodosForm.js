import React from 'react';

import { useTodosActions } from '../hooks';

const TodosForm = () => {
  const [text, setText] = React.useState('');
  const actions = useTodosActions();

  function handleSubmit(event) {
    event.preventDefault();

    if (text) {
      actions.create({ type: 'text', data: text });
      setText('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            placeholder="Thing to do"
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="control">
          <button className="button is-light">Add todo</button>
        </div>
      </div>
    </form>
  );
};

export default TodosForm;
