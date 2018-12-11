import AuthReducer from '../AuthReducer'
import React from 'react';
import { Reducer } from 'redux-testkit';
import configureStore from 'redux-mock-store';
import {connect} from 'react-redux';
import * as actions from '../../actions/types'


/*Idea to test reducers in this way taken from
https://hackernoon.com/redux-testing-step-by-step-a-simple-methodology-for-testing-business-logic-8901670756ce

--Jesse */
const initState = {
  email:'',
  password:'',
  user: null,
  error:'',
  loading: false
};

//const emailState

  it('should have an initial state', () =>{
    expect(AuthReducer(undefined, {})).toEqual(initState);
});

  it('should not affect state', () => {
    Reducer(AuthReducer).expect({type: 'NOT-EXISTING'}).toReturnState(initState)
  });

  /*it('should store changed email states', () =>{
    const loginInfo = {...initState,email:'b'};
    //emailInfo = {email: 'blank@test.com'};
    const action = {type: actions.EMAIL_CHANGED,loginInfo};
   expect(actions).toContainEqual({
          type: ACTION_STORE_PHONE_NUMBERS,
          payload: { emailInfo },
        });
  });*/
  
  it('should correctly set login for user', () =>{
	  loginConnect = {...initState,loading:true,error:''};
    const action = {type: actions.LOGIN_USER_START,loginConnect};
    Reducer(AuthReducer).expect(action).toReturnState({...initState,loading:true});
	
	});
