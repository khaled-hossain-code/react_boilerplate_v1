import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpensifyApp = () => (
  <div>
    <h1>App home page</h1>
  </div>
);

const AddExpensePage = () => (
  <div>
    <h1>Add Expanse Page</h1>
  </div>
);

const EditExpensePage = () => (
  <div>
    <h1>Edit Expense Page</h1>
  </div>
);

const HelpPage = () => (
  <div>
    <h1>Help Page</h1>
  </div>
);
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpensifyApp} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage}  />
      <Route path="/help" component={HelpPage}  />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));