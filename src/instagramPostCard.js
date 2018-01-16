import React, { Component } from 'react'

// let postContent = this.props.postContent

class InstagramPostCard extends Component {
  render () {
    let postContent = this.props.postContent
    return (
      <section>
        <header>
          <h1>{postContent.author}</h1>
        </header>
        <div>
          <div>
            <img src={postContent.imageURL} alt="a post" />
          </div>
          <div>
            <p>{postContent.caption}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default InstagramPostCard
