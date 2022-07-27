import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import appRoutes, { BASE_ROUTE_NAME } from './AppRoutes';
import CitizenDashBoardContainer from './views/citizenDashBoard/CitizenDashBoard.container';


const AppRouter: React.FC = () => {
  return (
    <Router basename={BASE_ROUTE_NAME}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple React App</h1>
        </header>
        <Switch>
          <Route exact path={appRoutes.homePage} render={() => (
            <Redirect to={appRoutes.citizenDetail} />
          )} />
          <Route exact path={appRoutes.citizenDetail} component={CitizenDashBoardContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
