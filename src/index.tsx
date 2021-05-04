import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux"
import store from "./store";

import { Routing } from './shared/organisms/routing'





const Root = () => {
  return (
   <Provider store={store}>
     <Routing />
   </Provider>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();
