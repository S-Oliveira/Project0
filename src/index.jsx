import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './components/LoginForm/LoginForm';
import { provider } from 'react-redux'
import store from './redux/store'

import App from './main/app'

ReactDOM.render(
  <Provider store={store}>
    <LoginForm/>
  </Provider>,
  document.getElementById('app')
);
