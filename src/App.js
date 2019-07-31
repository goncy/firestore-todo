import React from 'react';

import TodosForm from './todos/components/TodosForm';
import TodosList from './todos/components/TodosList';

import { useSession } from './session/hooks';

function App() {
  const [user, { signOut }] = useSession();

  return (
    <section className="hero is-dark is-bold is-fullheight has-navbar-fixed-top">
      <div className="hero-head">
        <nav className="navbar is-fixed-top">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active" role="button" onClick={signOut}>
                  Log out
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Welcome {user.displayName}</h1>
          <h2 className="subtitle">This are your todos</h2>
          <div className="content is-flex is-vertical is-centered has-text-left">
            <TodosForm />
            <TodosList />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
