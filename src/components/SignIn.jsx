import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router';
class SignIn extends Component {
  constructor (props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  }
  SignIn(){
    
    const {email, password} = this.state
    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(error =>{
     
      this.setState({error});
    })
  }
  render(){
    return (
      <div className='form-inline' style={{margin: '5%'}}><h2>Sign In</h2>
      <div className='form-group'>
        <input
          className='form-control'
          type='text'
          style={{marginRight: '5px'}}
          placeholder='email'
          onChange={event => this.setState({email: event.target.value})}
          onKeyPress={event => {
        if (event.key === 'Enter'){
          this.SignIn()
        }
      } } 
        />
          <input className='form-control'
            type='password'
            style={{marginRight: '5px'}}
            placeholder='password'
            onChange={event => this.setState({password: event.target.value})}
            onKeyPress={event => {
        if (event.key === 'Enter'){
          this.SignIn()
        }
      } } 
          />
            <button className='btn btn-primary'
              type='button' onClick={() => this.SignIn()}> Sign in </button>
      </div>
      <div>{this.state.error.message}</div>
      <div><Link to={'/signup'}>Register</Link></div>

    </div>
    );
  }
}

export default SignIn;
