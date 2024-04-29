import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Break into separate App/Header/Form components, put in separate files with their own name
function App() {
  return (
    <div className="app">
      <div className="app-container">
        <img
          className="app-container-img"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="app-container-h2">Sign in to your account</h2>
      </div>

      <div className="app-container-div">
        <form className="app-container-form" action="#" method="POST">
          <div>
            <label htmlFor="email" className="app-container-label-email">
              Email address
            </label>
            <div className="app-container-form-div">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="app-container-form-email"
              />
            </div>
          </div>

          <div>
            <div className="app-container-div-div">
              <label
                htmlFor="password"
                className="app-container-label-password"
              >
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="app-container-forgot">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="app-container-form-div">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="app-container-form-email"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="app-container-submit">
              Sign in
            </button>
          </div>
        </form>

        <p className="app-container-member">
          Not a member?{' '}
          <a href="#" className="app-container-member-a">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
