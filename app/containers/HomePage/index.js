/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LandingMan from 'images/landing-man.png';

import Sitemap from 'common/routing';
import { media } from 'common/theme';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Landing>
        <img src={LandingMan} alt="The Man" />
        <Info>
          <h4>Telah Dibuka!</h4>
          <h1>Open Recruitment<br /><span>Anggota Ristek 2018</span></h1>
          <button className="yellow">Login SSO</button>
          <Link to={Sitemap.encyclopedia}>Ensiklopedia</Link>
        </Info>
      </Landing>
    );
  }
}

const Landing = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0 2rem;

  ${media('mobile')} {
    padding: 2rem 2rem 4rem;
    min-height: 100vh;
  }

  img {
    width: 20rem;
    height: auto;
    margin: 0 3rem 0 0;

    ${media('mobile')} {
      width: 15rem;
      margin: 0 0 2rem;
    }
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  ${media('mobile')} {
    flex: none;
    width: 100%;
    justify-content: center;
  }

  h1,
  h4 {
    width: 100%;
  }

  h1 {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1;
    margin: 0 0 3rem;
    color: ${(props) => props.theme.color.yellow};

    span {
      color: ${(props) => props.theme.color.blue};
    }

    ${media('mobile')} {
      font-size: 2.5rem;
      text-align: center;
      margin: 0 0 2rem;
    }
  }

  h4 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1;
    margin: 0 0 1rem;

    ${media('mobile')} {
      font-size: 1rem;
      text-align: center;
      margin: 0 0 0.25rem;
    }
  }

  button,
  a {
    display: block;
    min-width: 10rem;
    padding: 1rem 2rem;
    margin: 0 2rem 0 0;
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

    &.blue {
      background: ${(props) => props.theme.color.blue};
    }

    &.yellow {
      background: ${(props) => props.theme.color.yellow};
    }

    ${media('mobile')} {
      width: 100%;
      margin: 0 0 1rem;
    }
  }


  a {
    margin: 0;
  }
`;
