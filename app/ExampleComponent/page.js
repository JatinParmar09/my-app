// ExampleComponent.js
'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, setAuthStatus, setValidationError } from '../actions';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogin = () => {
    // Simulating a login action
    const token = 'yourToken';
    const username = 'john_doe';
    const studentId = '12345';
    const email = 'john.doe@example.com';

    // Simulate authentication success
    dispatch(setUserData(token, username, studentId, email));
    dispatch(setAuthStatus(true));
    dispatch(setValidationError(''));
  };

  const handleValidationFailure = () => {
    // Simulate validation failure
    dispatch(setValidationError('Invalid credentials'));
    dispatch(setAuthStatus(false));
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleValidationFailure}>Validation Failure</button>
      <div>User Data: {JSON.stringify(user)}</div>
      {/* <div>Validation Error: {user.validationError}</div> */}
    </div>
  );
};

export default ExampleComponent;
