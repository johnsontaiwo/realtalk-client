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
    //const { title, content } = this.state
    event.preventDefault()
    //debugger
    //this.props.addArticle(this.props.articleFormData)
    if (this.state !== '') {this.props.addArticle(this.state)}
    this.setState({
      title: '',
      content: '',
      author_name: ''
     
    })
  }
   
  render() {
     
    const { title, content, author_name } = this.state
    return(
     <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
       <input type="text" placeholder="Title" name="title" value={ title } onChange={(event) => this.handleChange(event)} />
       <input type="textarea" placeholder="Share something" name="content" value={ content } onChange={(event) => this.handleChange(event)} />
        <input type="text" placeholder="Author Name" name="author_name" value={ author_name } onChange={(event) => this.handleChange(event)} />
        
       <input type="submit" />
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
