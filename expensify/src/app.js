import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help component
  </div>
);

const NotFound = () => (
  <div>
        404 - Page not found.<Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <div>
    <NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink>
    <NavLink activeClassName="is-active" to="/create">Create</NavLink>
    <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
    <NavLink activeClassName="is-active" to="/help">Help</NavLink>
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
