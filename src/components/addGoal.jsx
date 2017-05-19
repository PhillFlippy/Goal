import React, {Component} from 'react';
import {goalRef} from '../firebase'
import {connect} from 'react-redux';
class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
  }
  addGoal(){
    const {title} = this.state;
    const {email} = this.props.user;
    console.log('this.state goal', this.state);
    goalRef.push({email , title});
  }
  render(){
    return(
       <div className='form-inline'>
      <div className='form-group'>
        <input type='text'
          placeholder='Add a goal'
          className='form-control'
          style={{marginRight: '5px'}}
        onChange={event => this.setState({title: event.target.value})} 
        onKeyPress={event => {
        if (event.key === 'Enter'){
          this.addGoal()
        }
      } } />
          <button className='btn btn-success'
            type='button'
            onClick={() => this.addGoal()}>Submit</button>
      </div>
    </div>)
  }
}
function mapStateToProps(state){
  const {user} = state;
  return{
    user
  }
}
export default connect(mapStateToProps, null)(AddGoal);
