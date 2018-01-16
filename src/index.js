import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import InstagramPostCard from './instagramPostCard'
import registerServiceWorker from './registerServiceWorker';

let postContent = {
  author: 'tomatohammado',
  imageURL: './assets/images/1688273_218569981679809_2116004644_n.jpg',
  comments: [
    'What a cuuuuuute puppy',
    '🐶 😍'
  ]
}

ReactDOM.render(<InstagramPostCard postContent={postContent} />, document.getElementById('root'));
registerServiceWorker();
