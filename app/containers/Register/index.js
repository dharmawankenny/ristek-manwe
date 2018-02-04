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
import { setInput, post } from './actions';
import makeSelectRegister from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Register extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      warnings: {
        cv: '',
        phone: '',
        line: '',
        divisionOne: '',
        reasonOne: '',
        divisionTwo: '',
        reasonTwo: '',
      },
    };
  }

  validate = () => {
    const { cv, phone, line, divisionOne, reasonOne, divisionTwo, reasonTwo } = this.props.register.input;
    const warnings = {
      cv: '',
      phone: '',
      line: '',
      divisionOne: '',
      reasonOne: '',
      divisionTwo: '',
      reasonTwo: '',
    };

    let valid = true;

    if (cv.length === 0 || !cv.startsWith('http')) {
      valid = false;
      warnings.cv = 'Link CV tidak boleh kosong atau tidak valid (harus dimulai dengan http atau https)';
    }

    if (phone.length === 0) {
      valid = false;
      warnings.phone = 'Nomor telepon tidak boleh kosong';
    }

    if (line.length === 0) {
      valid = false;
      warnings.line = 'ID Line tidak boleh kosong';
    }

    if (divisionOne.length === 0) {
      valid = false;
      warnings.divisionOne = 'Divisi pilihan 1 tidak boleh kosong';
    }

    if (divisionOne.length > 0 && reasonOne.length === 0) {
      valid = false;
      warnings.reasonOne = 'Alasan memilih divisi pilihan 1 tidak boleh kosong';
    }

    if (divisionTwo.length > 0 && reasonTwo.length === 0) {
      valid = false;
      warnings.reasonTwo = 'Alasan memilih divisi pilihan 2 tidak boleh kosong';
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
    const { cv, phone, line, divisionOne, reasonOne, divisionTwo, reasonTwo } = this.props.register.input;
    const { warnings } = this.state;

    return (
      <Wrapper>
        <Helmet>
          <title>Form Pendaftaran</title>
          <meta name="description" content="Isi form ini dan daftar menjadi anggota Ristek Fasilkom UI 2018 sekarang juga!" />
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
          <h1>Hai, {'Donald'}</h1>
          <h4>Isi form dibawah ini ya untuk mendaftar menjadi anggota Ristek Fasilkom UI 2018</h4>
          <input
            type="text"
            value={cv}
            onChange={(evt) => this.props.dispatch(setInput('cv', evt.target.value))}
            placeholder="Link CV (Public Link GDrive/Dropbox)"
            disabled={loading}
          />
          {warnings.cv &&
            <h6>{warnings.cv}</h6>}
          <input
            type="tel"
            value={phone}
            onChange={(evt) => this.props.dispatch(setInput('phone', evt.target.value))}
            className="half"
            placeholder="Nomor Telepon"
            disabled={loading}
          />
          {warnings.phone &&
            <h6 className="half mobile">{warnings.phone}</h6>}
          <input
            type="text"
            value={line}
            onChange={(evt) => this.props.dispatch(setInput('line', evt.target.value))}
            className="half"
            placeholder="ID Line"
            disabled={loading}
          />
          {warnings.phone &&
            <h6 className="half desktop">{warnings.phone}</h6>}
          {warnings.line &&
            <h6 className="half">{warnings.line}</h6>}
          <select
            value={divisionOne}
            onChange={(evt) => this.props.dispatch(setInput('divisionOne', evt.target.value))}
            disabled={loading}
          >
            <option value="" selected disabled>Divisi Pilihan 1</option>
            <option value="hr">Human Resource</option>
            <option value="pr">Public Relation</option>
            <option value="pm">Project Management</option>
            <option value="dev-web">SIG Web Development</option>
            <option value="dev-mob">SIG Mobile Development</option>
            <option value="dev-gam">SIG Game Development</option>
            <option value="dev-dpd">SIG Digital Product Development</option>
            <option value="cys-net">SIG Network Security & Operating System</option>
            <option value="cys-dsc">SIG Data Science</option>
            <option value="cys-cpr">SIG Competitive Programming</option>
            <option value="cys-esy">SIG Embedded System</option>
          </select>
          {warnings.divisionOne &&
            <h6>{warnings.divisionOne}</h6>}
          <textarea
            value={reasonOne}
            onChange={(evt) => this.props.dispatch(setInput('reasonOne', evt.target.value))}
            placeholder="Alasan memilih divisi tersebut menjadi pilihan 1"
            disabled={!divisionOne || loading}
          />
          {warnings.reasonOne &&
            <h6>{warnings.reasonOne}</h6>}
          <select
            value={divisionTwo}
            onChange={(evt) => this.props.dispatch(setInput('divisionTwo', evt.target.value))}
            disabled={!divisionOne || loading}
          >
            <option value="" selected disabled>Divisi Pilihan 2</option>
            <option value="hr">Human Resource</option>
            <option value="pr">Public Relation</option>
            <option value="pm">Project Management</option>
            <option value="dev-web">SIG Web Development</option>
            <option value="dev-mob">SIG Mobile Development</option>
            <option value="dev-gam">SIG Game Development</option>
            <option value="dev-dpd">SIG Digital Product Development</option>
            <option value="cys-net">SIG Network Security & Operating System</option>
            <option value="cys-dsc">SIG Data Science</option>
            <option value="cys-cpr">SIG Competitive Programming</option>
            <option value="cys-esy">SIG Embedded System</option>
          </select>
          {warnings.divisionTwo &&
            <h6>{warnings.divisionTwo}</h6>}
          <textarea
            value={reasonTwo}
            onChange={(evt) => this.props.dispatch(setInput('reasonTwo', evt.target.value))}
            placeholder="Alasan memilih divisi tersebut menjadi pilihan 2"
            disabled={!divisionTwo || loading}
          />
          {warnings.reasonTwo &&
            <h6>{warnings.reasonTwo}</h6>}
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
