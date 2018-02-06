/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import styled from 'styled-components';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FourOFour>
        <h1>404. Oh schnaps, you are lost fella. There is nothing here.</h1>
      </FourOFour>
    );
  }
}

const FourOFour = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 5rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  h1 {
    font-size: 4rem;
  }

  a {
    display: block;
    min-width: 10rem;
    padding: 1rem 2rem;
    margin: 2rem 0 0 0;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    line-height: 1;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(62, 73, 94, 0.25);
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.dark};
    transition: 0.25s ease all;

    &:hover,
    &:focus {
      opacity: 0.85;
      transform: translate3d(2.5%, -2.5%, 0);
      outline: none;
    }
  }
`;
