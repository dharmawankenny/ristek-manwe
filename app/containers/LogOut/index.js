/*
 *
 * LogOut
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { logout } from 'global-actions';

const Main = styled.div`
  width: 100%;
  min-height: calc(100vh-5rem);
  padding: 5rem 10rem;
  position: relative;
  color: ${(props) => props.theme.color.dark};
  background: ${(props) => props.theme.color.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media screen and (max-width: 64em) {
    padding: 2.5rem;
  }
`;

const Header = styled.h1`
  font-size: 3rem;
  margin: 0;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  display: block;
  color: ${(props) => props.theme.color.dark};
`;

export class LogOut extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    push: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    window.localStorage.removeItem('user_oprec_ristek');
    this.props.logout();
    this.props.push('/oprec/');
  }

  render() {
    return (
      <Main>
        <Helmet
          title="Logging Out"
          meta={[
            { name: 'description', content: 'Logging out from Open Recruitment Platform' },
          ]}
        />
        <Header>Logging Out</Header>
      </Main>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    logout: () => dispatch(logout()),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(LogOut);
