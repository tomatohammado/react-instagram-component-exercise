import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import InstagramPostCard from './instagramPostCard'
import registerServiceWorker from './registerServiceWorker';

let postContent = {
  author: 'tomatohammado',
  // imageURL: './assets/images/1688273_218569981679809_2116004644_n.jpg',
  imageURL: 'https://i.imgur.com/GmNQvZQ.jpg',
  caption: 'Nice bow tie little guy 🎀',
  comments: [
    'What a cuuuuuute puppy',
    '🐶 😍'
  ]
}

ReactDOM.render(<InstagramPostCard postContent={postContent} />, document.getElementById('root'));
registerServiceWorker();
