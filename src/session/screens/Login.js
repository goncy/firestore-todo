import React from 'react';

const Login = ({ login, status }) => {
  return (
    <section className="hero is-dark is-bold is-fullheight">
      <div className="hero-body">
        <div className="container is-flex is-centered">
          {status === 'init' && <span>Trying to restore authentication...</span>}
          {status === 'restored' && (
            <button className="button is-large is-light" onClick={login}>
              Login with Google
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
