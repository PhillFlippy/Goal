import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './addGoal';
import GoalList from './goalList'
import CompleteGoalList from './completeGoalList'

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render(){
    const {email} = this.props.user;
    return (
      <div style={{margin: '5px'}}>
      <h3>Goals - {email}</h3>
      <div>Add Goals</div>
    <AddGoal />
    <hr /><div className='goals'>
    <h4>Goals</h4>
    <GoalList /></div> <hr/>
    <h4>Completed Goals</h4>
    <CompleteGoalList /> <hr />
      <button className='btn btn-danger'
        onClick={() => this.signOut()}>Sign Out</button></div>
    );
  }
}

function mapStateToProps(state){
  console.log('state', state);
  const {user} = state;
  return {user};
}
export default connect(mapStateToProps, null)(App);
