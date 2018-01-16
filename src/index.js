import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import InstagramPostCard from './instagramPostCard'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<InstagramPostCard />, document.getElementById('root'));
registerServiceWorker();
