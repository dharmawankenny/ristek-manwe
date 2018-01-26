/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';


function Footer() {
  return (
    <Foot>
      <div className="borders blue" />
      <div className="borders dark" />
      <div className="borders yellow" />
      <div className="wrapper">
        <h1>ALALALA</h1>
      </div>
    </Foot>
  );
}

const Foot = styled.div`
  width: 100%;
  height: 5rem;
  position: relative;

  .borders {
    width: calc(100% / 3);
    height: 0.2rem;
    position: absolute;
    top: 0;

    &.blue {
      z-index: 5;
      left: 0;
      background: ${(props) => props.theme.color.blue};
    }

    &.dark {
      z-index: 1;
      width: 100%;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      background: ${(props) => props.theme.color.dark};
    }

    &.yellow {
      z-index: 5;
      right: 0;
      background: ${(props) => props.theme.color.yellow};
    }
  }

  .wrapper {
    width: 100%;
    height: 5rem;
    max-width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    h1,
    h2,
    h3 {
      margin: 0;
    }
  }
`;

export default Footer;
