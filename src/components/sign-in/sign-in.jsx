import React from 'react';
import PropTypes from 'prop-types';
import withFormData from '../../hocs/with-form-data/with-form-data.jsx';
import Header from '../header/header.jsx';

const SignIn = ({user, onLoginSubmit, formData, onChange}) => {
  return (
    <div className="page page--gray page--login">
      <Header
        user={user}
      />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post"
              onSubmit={(evt) => {
                evt.preventDefault();
                onLoginSubmit({
                  email: formData.email,
                  password: formData.password,
                });
              }}
            >

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                  onChange={onChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={true}
                  onChange={onChange}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  formData: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export {SignIn};
export default withFormData(SignIn);
