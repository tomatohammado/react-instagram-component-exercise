import React, { Component } from 'react'

class InstagramPostCard extends Component {
  render () {
    return (
      <section>
        <h1>{this.props.postContent.author}</h1>
      </section>
    )
  }
}

export default InstagramPostCard
