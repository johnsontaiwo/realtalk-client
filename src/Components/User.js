import React, { Component } from 'react';
import usersContainer from './UserContainer';
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Article from './Article'
import { bindActionCreators } from 'redux';
import { fetchUser, updateUser } from  '../Actions/userActions'

class User extends Component {
 
state = {

  editable: false
}

componentDidMount() {
  //debugger
    this.props.fetchUser(this.props.user.id)
  }
  
   handleEdit = (event) => {
    event.preventDefault()
    if (this.state.editable) {var name = this.refs.name.value;
        var id = this.props.user.id;
        var email = this.refs.email.value;
        var gender = this.refs.gender.value;
        var date_of_birth = this.refs.date_of_birth.value;
        var user = {id: id , name: name , email: email, gender: gender, date_of_birth: date_of_birth};
        this.props.updateUser(user)}

    this.setState({
      editable: !this.state.editable
    })
   }

  

  render() {
    
    const  { user }  = this.props
    
    var name = this.state.editable ? <input type="text" ref="name" defaultValue={ user.name }/> : <h5>{ user.name }</h5>
    var email = this.state.editable ? <input type="text" ref="email" defaultValue={ user.email } /> : <h5>{ user.email }</h5>
    var gender = this.state.editable ? <input type="text" ref="gender" defaultValue={ user.gender } /> : <h5>{ user.gender }</h5>
    var date_of_birth = this.state.editable ? <input type="text" ref="date_of_birth" defaultValue={ user.date_of_birth } /> : <h5>{ user.date_of_birth }</h5>


   
    // //const allArticles = this.props.user.article && this.props.user.article.map(article => {
    //   return <Article key={article.id} article={article} userId={user.id} />
    // })

    return (
      <div className="userProfilePage">
        <h5> Name: { name } </h5> 
        <h5> Email: { email } </h5>
        <h5> Gender: { gender } </h5>
        <h5> Date of Birth: { date_of_birth } </h5>
        <button onClick={this.handleEdit}>{" "}
        {this.state.editable ? "Submit" : "Edit"}{" "}
        </button>
        
      </div>
    );
  }
}; 
        

const mapStateToProps = state => {
  return ({
    user: state.users.current
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchUser, updateUser}, dispatch);
     
  


export default connect(mapStateToProps, mapDispatchToProps)(User)