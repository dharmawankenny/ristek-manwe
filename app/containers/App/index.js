/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Footer from 'components/Footer';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <Main>
      <div className="content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.color.white};

  .content {
    margin: 0 auto;
    width: 100%;
    max-width: ${(props) => props.theme.maxWidth};
    min-height: calc(100vh - 5rem);
  }
`;
