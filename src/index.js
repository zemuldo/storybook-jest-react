import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ErrorBoundary from './ErrorBoundary'

ReactDOM.render(
    <ErrorBoundary>
        <App someProp = {{ description: 'This is app.js component'}} />
    </ErrorBoundary>
, document.getElementById('root'));
registerServiceWorker();
