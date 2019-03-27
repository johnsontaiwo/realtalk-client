import React, { Component } from 'react';
import { addArticle } from '../Actions/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ArticleInput extends Component {
 
  state = {
    
    title: '',
    content: '',
    author_name: ''

  }

  handleChange = event => {
  const { name, value } = event.target
      event.preventDefault();
    this.setState({
     [name]: value
    })
  }

  
  handleOnSubmit = event => {
    const article = this.state
    event.preventDefault()
    if (article.title && article.content && article.author_name) {this.props.addArticle(this.state)}
    this.setState({
      title: '',
      content: '',
      author_name: ''
    })
  }
     
    
      
   
  render() {
     
    const { title, content, author_name } = this.state
    return(
     <div className="articleInput">
     <h5>Share something</h5>
      <form className="articleInputs" onSubmit={(event) => this.handleOnSubmit(event)}>
        <input className="articleTitle" type="text" placeholder="Title" name="title" value={ title } onChange={(event) => this.handleChange(event)} /> <br />
        <input className="author" type="text" placeholder="Author Name" name="author_name" value={ author_name } onChange={(event) => this.handleChange(event)} /> <br />
        <textarea className="articleContent" placeholder="Share here" name="content" value={ content } onChange={(event) => this.handleChange(event)} /> <br />
       <input className="submitInfo" type="submit" />
      </form>
     </div>
    )
  }
}
        
        



const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addArticle }, dispatch);
};

export default connect(null, mapDispatchToProps)(ArticleInput)
