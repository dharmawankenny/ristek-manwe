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
import PropTypes, { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

import { getServerTime, setUser } from 'global-actions';
import makeSelectGlobal from 'global-selectors';

import LandingMan from 'images/landing-man.png';

import Sitemap from 'common/routing';
import { media } from 'common/theme';
import { SSO_DOMAIN, SSO_URL } from 'global-constants';

export class HomePage extends React.PureComponent {
  static propTypes = {
    push: func.isRequired,
    setUser: func.isRequired,
    global: object.isRequired,
  };

  componentDidMount() {
    // old login way using buggy window.opener
    // set this for local development becos fux same-origin policy why do they even bother implementing it on the bloody localhost anyway
    // document.domain = 'localhost';
    // document.domain = 'ristek.cs.ui.ac.id';

    // window.processLogin = (user) => {
    //   this.props.changeUserData(user);

    //   // set cookies
    //   const d = new Date();
    //   d.setTime(d.getTime() + (60 * 60 * 1000));
    //   const expires = `expires=${d.toUTCString()}`;
    //   document.cookie = `user_oprec_ristek=${JSON.stringify(user)};expires=${expires};path=[ristek.cs.ui.ac.id/oprec/]`;
    //   if (isEmpty(user.user_profile)) {
    //     this.props.push('/oprec/daftar');
    //   } else {
    //     this.props.push('/oprec/dashboard');
    //   }
    // };

    if (
      !this.props.global.loading &&
      !this.props.global.success &&
      !this.props.global.serverTime
    ) {
      this.props.dispatch(getServerTime());
    }

    window.addEventListener('message', this.receiveLoginData, false);

    const userData = this.getCookie('user_oprec_ristek');

    if (userData !== '') {
      this.props.setUser(JSON.parse(userData));
    }
  }

  getCookie(cname) {
    const name = `${cname}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  /**
   *  Catch login data from message sent by CP ORION via postMessage function
   *  Caught by setting an event listener to 'message' event
   */
  receiveLoginData = (event) => {
    // For Chrome, the origin property is in the event.originalEvent object.
    const origin = event.origin || event.originalEvent.origin;
    const user = event.data;

    // MAKE SURE FUNCTION CALLER ORIGIN IS FROM CP ORION DOMAIN! SECURITY PURPOSES.
    if (origin === SSO_DOMAIN) {
      this.props.setUser(user);

      // set cookies
      const d = new Date();
      d.setTime(d.getTime() + 60 * 60 * 1000);
      const expires = `expires=${d.toUTCString()}`;
      document.cookie = `user_oprec_ristek=${JSON.stringify(
        event.data
      )};expires=${expires};path=[ristek.cs.ui.ac.id/oprec/]`;

      // redirect after login success
      if (isEmpty(user.user_profile)) {
        this.props.push('/oprec/daftar');
      } else {
        this.props.push('/oprec/dashboard');
      }
    }
  };

  login = () => {
    if (isEmpty(this.props.global.user)) {
      // save window for login to variable so we can call postMessage to it
      const loginWindow = window.open(
        SSO_URL,
        '_blank',
        'width=600,height=600'
      );

      // send message to the window constantly until window closes
      const orionMessageInterval = setInterval(() => {
        // stop interval when login window has closed
        if (loginWindow.closed) {
          clearInterval(orionMessageInterval);
        }

        // postMessage to the window, the message is not important whatsoever,
        // what important is that CP ORION get CP OMEGA origin window
        // so CP ORION can send message back to CP OMEGA
        loginWindow.postMessage('iliketrains', SSO_URL);
      }, 1000);
    }
  };

  render() {
    return (
      <Landing>
        <img src={LandingMan} alt="The Man" />
        <Info>
          <h4>Telah Dibuka!</h4>
          <h1>
            Open Recruitment<br />
            <span>Anggota Ristek 2018</span>
          </h1>
          <button className="yellow" onClick={this.login}>
            Login SSO
          </button>
          <Link to={Sitemap.encyclopedia}>Ensiklopedia</Link>
        </Info>
      </Landing>
    );
  }
}

HomePage.propTypes = {
  global: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

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

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setUser: (user) => dispatch(setUser(user)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomePage);
