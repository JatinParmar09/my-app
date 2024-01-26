// src/components/ReduxProvider.js
'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path accordingly

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
