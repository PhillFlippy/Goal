import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router';
class SignUp extends Component {
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
  signUp(){
    
    const {email, password} = this.state
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(error =>{
      this.setState({error});
    })
  }
  render(){
    return (
      <div className='form-inline' style={{margin: '5%'}}><h2>Sign Up</h2>
      <div className='form-group'>
        <input
          className='form-control'
          type='text'
          style={{marginRight: '5px'}}
          placeholder='email'
          onChange={event => this.setState({email: event.target.value})}
          onKeyPress={event => {
        if (event.key === 'Enter'){
          this.signUp()
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
          this.signUp()
        }
      } } 
          />
            <button className='btn btn-primary'
              type='button' onClick={() => this.signUp()}> Sign up </button>
      </div>
      <div>{this.state.error.message}</div>
      <div><Link to={'/signin'}>Sign In</Link></div>

    </div>
    );
  }
}

export default SignUp;
