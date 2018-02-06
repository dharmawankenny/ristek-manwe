/**
 *
 * Register
 *
 */

import React from 'react';
import PropTypes, { func, any } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

import Papa from 'images/paparistek.png';

import Sitemap from 'common/routing';
import { media } from 'common/theme';

import { setUser } from 'global-actions';
import makeGlobalSelector from 'global-selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { setInput, post, fetchInitial } from './actions';
import makeSelectRegister from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Register extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    global: any,
    push: func.isRequired,
    fetchInitial: func.isRequired,
    setUser: func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      warnings: {
        cv_link: '',
        email: '',
        phone: '',
        line: '',
        first_section: '',
        first_section_reason: '',
        second_section: '',
        second_section_reason: '',
      },
    };
  }

  componentDidMount() {
    let userData = window.localStorage.getItem('user_oprec_ristek');

    if (userData !== '') {
      userData = JSON.parse(userData);
    }

    if (!isEmpty(this.props.global.user)) {
      userData = this.props.global.user;
    }

    if (!isEmpty(userData)) {
      if (isEmpty(this.props.global.user)) {
        this.props.setUser(userData);
      }

      if (!isEmpty(userData.user_profile)) {
        this.props.push('/oprec/dashboard');
      } else {
        this.props.fetchInitial(userData.token);
      }
    } else {
      this.props.push('/oprec/');
    }
  }

  validate = () => {
    const {
      cv_link,
      email,
      phone,
      line,
      first_section,
      first_section_reason,
      second_section,
      second_section_reason,
    } = this.props.register.input;

    const warnings = {
      cv_link: '',
      email: '',
      phone: '',
      line: '',
      first_section: '',
      first_section_reason: '',
      second_section: '',
      second_section_reason: '',
    };

    let valid = true;

    if (cv_link.length === 0 || !cv_link.startsWith('http')) {
      valid = false;
      warnings.cv_link =
        'Link CV tidak boleh kosong atau tidak valid (harus dimulai dengan http atau https)';
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.length === 0 || !emailRegex.test(email)) {
      valid = false;
      warnings.email = 'Email kosong atau tidak valid';
    }

    if (phone.length === 0) {
      valid = false;
      warnings.phone = 'Nomor telepon tidak boleh kosong';
    }

    if (line.length === 0) {
      valid = false;
      warnings.line = 'ID Line tidak boleh kosong';
    }

    if (first_section <= 0) {
      valid = false;
      warnings.first_section = 'Divisi pilihan 1 tidak boleh kosong';
    }

    if (first_section > 0 && first_section_reason.length === 0) {
      valid = false;
      warnings.first_section_reason = 'Alasan memilih divisi pilihan 1 tidak boleh kosong';
    }

    if (second_section > 0 && second_section_reason.length === 0) {
      valid = false;
      warnings.second_section_reason = 'Alasan memilih divisi pilihan 2 tidak boleh kosong';
    }

    if (first_section === second_section) {
      valid = false;
      warnings.first_section = 'Divisi pilihan 1 dan 2 tidak boleh sama';
      warnings.second_section = 'Divisi pilihan 1 dan 2 tidak boleh sama';
    }

    this.setState({ warnings });

    return valid;
  };

  submit = () => {
    if (this.validate()) {
      this.props.dispatch(post());
    }
  };

  render() {
    const { loading } = this.props.register;
    const {
      cv_link,
      email,
      phone,
      line,
      first_section,
      first_section_reason,
      second_section,
      second_section_reason,
    } = this.props.register.input;
    const { warnings } = this.state;

    return (
      <Wrapper>
        <Helmet>
          <title>Form Pendaftaran</title>
          <meta
            name="description"
            content="Isi form ini dan daftar menjadi anggota Ristek Fasilkom UI 2018 sekarang juga!"
          />
        </Helmet>
        <Spinner loading={this.props.global.loading}>
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </Spinner>
        <Heading>
          <img className="mobile" src={Papa} alt="papa" />
          <h1>
            Form Pendaftaran<br />
            <span>Anggota Ristek 2018</span>
            <br />
            <Link className="yellow" to={Sitemap.encyclopedia}>
              Buka Ensiklopedia
            </Link>
            <Link to={Sitemap.logout}>Logout</Link>
          </h1>
          <img className="desktop" src={Papa} alt="papa" />
        </Heading>
        <Form>
          <h1>Hai, {this.props.global.user.name}</h1>
          <h4>
            Isi form dibawah ini ya untuk mendaftar menjadi anggota Ristek
            Fasilkom UI 2018
          </h4>
          <input
            type="text"
            value={cv_link}
            onChange={(evt) =>
              this.props.dispatch(setInput('cv_link', evt.target.value))
            }
            placeholder="Link CV (Public Link GDrive/Dropbox)"
            disabled={loading}
          />
          {warnings.cv_link && <h6>{warnings.cv_link}</h6>}
          <input
            type="email"
            value={email}
            onChange={(evt) =>
              this.props.dispatch(setInput('email', evt.target.value))
            }
            placeholder="Email"
            disabled={loading}
          />
          {warnings.email && <h6>{warnings.email}</h6>}
          <input
            type="tel"
            value={phone}
            onChange={(evt) =>
              this.props.dispatch(setInput('phone', evt.target.value))
            }
            className="half"
            placeholder="Nomor Telepon"
            disabled={loading}
          />
          {warnings.phone && <h6 className="half mobile">{warnings.phone}</h6>}
          <input
            type="text"
            value={line}
            onChange={(evt) =>
              this.props.dispatch(setInput('line', evt.target.value))
            }
            className="half"
            placeholder="ID Line"
            disabled={loading}
          />
          {warnings.phone && <h6 className="half desktop">{warnings.phone}</h6>}
          {warnings.line && <h6 className="half">{warnings.line}</h6>}
          <select
            value={first_section}
            onChange={(evt) =>
              this.props.dispatch(setInput('first_section', evt.target.value))
            }
            disabled={loading}
          >
            <option value={-1} selected disabled>
              Divisi Pilihan 1
            </option>
            {this.props.register.sections.map((section) =>
              <option value={section.id}>{section.name}</option>
            )}
          </select>
          {warnings.first_section && <h6>{warnings.first_section}</h6>}
          <textarea
            value={first_section_reason}
            onChange={(evt) =>
              this.props.dispatch(setInput('first_section_reason', evt.target.value))
            }
            placeholder="Alasan memilih divisi tersebut menjadi pilihan 1"
            disabled={first_section <= 0 || loading}
          />
          {warnings.first_section_reason && <h6>{warnings.first_section_reason}</h6>}
          <select
            value={second_section}
            onChange={(evt) =>
              this.props.dispatch(setInput('second_section', evt.target.value))
            }
            disabled={first_section <= 0 || loading}
          >
            <option value={-1} selected disabled>
              Divisi Pilihan 2
            </option>
            {this.props.register.sections.map((section) =>
              <option value={section.id}>{section.name}</option>
            )}
          </select>
          {warnings.second_section && <h6>{warnings.second_section}</h6>}
          <textarea
            value={second_section_reason}
            onChange={(evt) =>
              this.props.dispatch(setInput('second_section_reason', evt.target.value))
            }
            placeholder="Alasan memilih divisi tersebut menjadi pilihan 2"
            disabled={second_section <= 0 || loading}
          />
          {warnings.second_section_reason && <h6>{warnings.second_section_reason}</h6>}
          <button onClick={this.submit}>Daftar!</button>
        </Form>
      </Wrapper>
    );
  }
}

Register.propTypes = {
  register: PropTypes.object.isRequired,
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

  h1,
  h4 {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;
    margin: 0 0 0.5rem;
  }

  h4 {
    color: ${(props) => props.theme.color.gray};
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
  }

  h6 {
    width: 100%;
    margin: 0;
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.red};

    &.half {
      width: calc(50% - 0.5rem);

      ${media('mobile')} {
        width: calc(100% + 4rem);
      }
    }

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

    ${media('mobile')} {
      width: calc(100% + 4rem);
      margin-left: -2rem;
      margin-right: -2rem;
      padding: 0.5rem 2rem;
    }
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 1rem 1.5rem;
    margin: 2rem 0 0;
    font-size: 1rem;
    background: ${(props) => props.theme.color.pure};
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(62, 73, 94, 0.15);

    &:disabled {
      background: ${(props) => props.theme.color.snow};
      opacity: 0.5;
    }

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
    margin: 2rem 0 0;
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

const Spinner = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(62, 73, 94, 0.75);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  opacity: ${(props) => props.loading ? 1 : 0};
  transform: scale(${(props) => props.loading ? 1 : 0});
  transition: 0.25s ease opacity, 0.1s ease transform;

  .sk-cube-grid {
    width: 4rem;
    height: 4rem;
  }

  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: ${(props) => props.theme.color.yellow};
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }
  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
            animation-delay: 0s; }
  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube9 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }

  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }

  @keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }
`;

const mapStateToProps = createStructuredSelector({
  global: makeGlobalSelector(),
  register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchInitial: (token) => dispatch(fetchInitial(token)),
    setUser: (user) => dispatch(setUser(user)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'register', reducer });
const withSaga = injectSaga({ key: 'register', saga });

export default compose(withReducer, withSaga, withConnect)(Register);
