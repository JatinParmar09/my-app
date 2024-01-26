// components/RootLayout.js

import React from 'react';
import ReduxProvider from './ReduxProvider';
import PrivateRoute from './PrivateRoute';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import DashboardPage from './dashboard/page'
export const metadata = {
  title: 'EDUsync',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <Router>
        <html lang="en">
          <Switch>
            {/* Public routes */}
            <Route path="/login" component={Login} />
            <Route path="/landing" component={LandingPage} />

            {/* Private routes */}
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/profile" component={Profile} />

            {/* Default route */}
            <Route path="/" component={DefaultPage} />
          </Switch>
        </html>
      </Router>
    </ReduxProvider>
  );
}