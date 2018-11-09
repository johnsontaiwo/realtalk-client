import React, { Component } from 'react';

class ArticleInput extends Component {

  state = {
    id: 0,
    title: '',
    content: '',
    authorName: ''
  }
  handleOnChange(event) {
   this.setState({
    id: this.state.id + 1,
    title: event.target.value,
    authorName: event.target.value
   })
  }
  
  handleChange(event) {
   this.setState({
    
    content: event.target.value,
    
   })
  }
  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addArticle(this.state.title)
    this.setState({
      title: '',
      content: '',
      authorName: ''
    })
  }

  render() {
    return(
     <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
       <input 
        type="text"
        placeholder="title"
        value={this.state.title}
        onChange={(event) => this.handleOnChange(event)} />
        <input type="textarea" placeholder="Share something" value={this.state.content} onChange={(event) => this.handleChange(event)} />
       <input type="submit" />
      </form>
     </div>
    )
  }
}

export default ArticleInput;