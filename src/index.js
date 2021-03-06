import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';


import reducers from './reducers';

const store = createStore(
    reducers,
);

ReactDOM.render(<Provider store = {store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));

registerServiceWorker();
