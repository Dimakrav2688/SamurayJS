// import reportWebVitals from './reportWebVitals';
// import store from './react kabzda/redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './react kabzda/redux/redux-store'




  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App  />
      </Provider>
    </BrowserRouter>, document.getElementById('root'));






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// state={state} dispatch={store.dispatch.bind(store)} store={store}  , старый вариант прокидывания пропсов в АПП комп.
