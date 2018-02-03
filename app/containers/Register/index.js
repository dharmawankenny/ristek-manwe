/**
 *
 * Register
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Papa from 'images/paparistek.png';

import Sitemap from 'common/routing';
import { media } from 'common/theme';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRegister from './selectors';
import reducer from './reducer';
import saga from './saga';


export class Register extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Register</title>
          <meta name="description" content="Description of Register" />
        </Helmet>
        <Heading>
          <img className="mobile" src={Papa} alt="papa" />
          <h1>
            Form Pendaftaran<br />
            <span>Anggota Ristek 2018</span><br />
            <Link className="yellow" to={Sitemap.encyclopedia}>Buka Ensiklopedia</Link>
            <button>Logout</button>
          </h1>
          <img className="desktop" src={Papa} alt="papa" />
        </Heading>
        <Form>
          <input
            type="text"
            placeholder="Link CV (Public Link GDrive/Dropbox)"
          />
          <input
            type="text"
            placeholder="Nama Lengkap"
          />
          <input
            type="tel"
            className="half"
            placeholder="Nomor Telepon"
          />
          <input
            type="text"
            className="half"
            placeholder="ID Line"
          />
          <select>
            <option selected disabled>Divisi Pilihan 1</option>
          </select>
          <textarea placeholder="Alasan memilih divisi tersebut menjadi pilihan 1" />
          <select>
            <option selected disabled>Divisi Pilihan 2</option>
          </select>
          <textarea placeholder="Alasan memilih divisi tersebut menjadi pilihan 2" />
          <button>Daftar!</button>
        </Form>
      </Wrapper>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  width: 100%;
  padding: 4rem 2rem 6rem;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  align-content: center;

  ${media('mobile')} {
    padding: 4rem 2rem 6rem;
  }
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  h1 {
    flex: 1;
    font-size: 4rem;
    font-weight: 900;
    line-height: 1;
    text-align: left;
    margin: 0 1rem 0 0;
    color: ${(props) => props.theme.color.yellow};

    span {
      color: ${(props) => props.theme.color.blue};
    }

    a,
    button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      margin: 1rem 0 0;
      font-size: 1rem;
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
        margin: 1rem 0 0;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }
    }

    a {
      margin-right: 1rem;

      ${media('mobile')} {
        margin-right: 0;
      }
    }

    ${media('mobile')} {
      width: 100%;
      flex: none;
      font-size: 2.5rem;
      text-align: center;
      margin: 2rem 0 0;
    }
  }

  img {
    width: 10rem;
    height: auto;

    &.mobile {
      display: none;

      ${media('mobile')} {
        display: block;
      }
    }

    &.desktop {
      display: block;

      ${media('mobile')} {
        display: none;
      }
    }
  }
`;

const Form = styled.div`
  width: 100%;
  margin: 4rem 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  input,
  select,
  textarea {
    width: 100%;
    padding: 1rem 1.5rem;
    margin: 0 0 2rem;
    font-size: 1rem;
    background: ${(props) => props.theme.color.pure};
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(62, 73, 94, 0.15);

    ${media('mobile')} {
      width: calc(100% + 4rem);
      margin-left: -2rem;
      margin-right: -2rem;
      padding: 1rem 2rem;
      font-size: 1rem;
    }
  }

  input {
    &.half {
      width: calc(50% - 0.5rem);

      ${media('mobile')} {
        width: calc(100% + 4rem);
      }
    }
  }

  button {
    display: block;
    padding: 1rem 2rem;
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    line-height: 1;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(62, 73, 94, 0.25);
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.blue};
    transition: 0.25s ease all;

    &:hover,
    &:focus {
      opacity: 0.85;
      transform: translate3d(2.5%, -2.5%, 0);
      outline: none;
    }

    ${media('mobile')} {
      width: 100%;
      font-size: 1rem;
    }
  }
`;

const mapStateToProps = createStructuredSelector({
  register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'register', reducer });
const withSaga = injectSaga({ key: 'register', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Register);
