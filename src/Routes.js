import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Example from './toys/Example';

export function Home() {
    return (
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/example">Example</Link>
                </li>
            </ul>
            </nav>
        </div>
    );
}

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/example">
            <Example />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}