import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from "./store";
import UiKit from './common/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <UiKit>
      <Provider store={store}>
        <App />
      </Provider>
    </UiKit>
  </React.StrictMode>,
  document.getElementById('root')
)