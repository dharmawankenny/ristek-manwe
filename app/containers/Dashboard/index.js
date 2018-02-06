/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes, { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isEmpty, get } from 'lodash';

import Papa from 'images/paparistek.png';

import makeSelectGlobal from 'global-selectors';
import { setUser } from 'global-actions';
import Sitemap from 'common/routing';
import { media } from 'common/theme';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { submitTask } from './actions';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Dashboard extends React.Component {
  static propTypes = {
    global: object.isRequired,
    setUser: func.isRequired,
    push: func.isRequired,
    submitTask: func.isRequired,
  };

  state = {
    taskInput: {},
  };

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

      if (isEmpty(userData.user_profile)) {
        this.props.push('/oprec/register');
      }
    } else {
      this.props.push('/oprec/');
    }
  }

  handleTaskInputChange = (taskId) => (e) => {
    this.setState({
      taskInput: {
        ...this.state.taskInput,
        [taskId]: e.target.value,
      },
    });
  };

  handleTaskSubmit = (section, taskId) => () => {
    this.props.submitTask({
      section,
      file_link: this.state.taskInput[taskId],
    });
  };

  render() {
    const { global } = this.props;
    const firstDivisionTasks = get(
      global,
      'user.user_profile.first_section.task',
      []
    );
    const secondDivisionTasks = get(
      global,
      'user.user_profile.second_section.task',
      []
    );

    return (
      <Wrapper>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Description of Dashboard" />
        </Helmet>
        <Heading>
          <img className="mobile" src={Papa} alt="papa" />
          <h1>
            Dashboard Submisi<br />
            <span>Anggota Ristek 2018</span>
            <br />
            <Link className="yellow" to={Sitemap.encyclopedia}>
              Buka Ensiklopedia
            </Link>
            <Link to={Sitemap.logout}>Logout</Link>
          </h1>
          <img className="desktop" src={Papa} alt="papa" />
        </Heading>
        {firstDivisionTasks.map((task) => {
          let newestSubmissionFlag = 0;
          let firstSectionSubmission = '-';

          this.props.global.user.user_profile.submissions.map((valueSubmission) => {
            if (valueSubmission.section === this.props.global.user.user_profile.first_section.id) {
              if (valueSubmission.id > newestSubmissionFlag) {
                newestSubmissionFlag = valueSubmission.id;
                firstSectionSubmission = valueSubmission.file_link;
              }
            }
            return '';
          });

          return (
            <Task key={task.id} background="blue" color="white" accent="dark">
              <h1>{task.name}</h1>
              <h4>Lampiran: <a href={task.detail_link} target="_blank">{task.description_link}</a></h4>
              <h4>Submisi Saat Ini: <a href={firstSectionSubmission} target="_blank">{firstSectionSubmission}</a></h4>
              <div className="inputWrapper">
                <input
                  type="text"
                  placeholder="Masukkan link submission"
                  value={get(this.state.taskInput, task.id, '')}
                  onChange={this.handleTaskInputChange(task.id)}
                />
                <button
                  onClick={this.handleTaskSubmit(
                    global.user.user_profile.first_section.id,
                    task.id
                  )}
                >
                  Submit Tugas
                </button>
              </div>
            </Task>
          );
        })}
        {secondDivisionTasks.map((task) => {
          let newestSubmissionFlag = 0;
          let secondSectionSubmission = '-';

          this.props.global.user.user_profile.submissions.map((valueSubmission) => {
            if (valueSubmission.section === this.props.global.user.user_profile.second_section.id) {
              if (valueSubmission.id > newestSubmissionFlag) {
                newestSubmissionFlag = valueSubmission.id;
                secondSectionSubmission = valueSubmission.file_link;
              }
            }
            return '';
          });

          return (
            <Task key={task.id} background="yellow" color="dark" accent="dark">
              <h1>{task.name}</h1>
              <h4>Lampiran: {task.detail_link}</h4>
              <h4>Submisi Saat Ini: <a href={secondSectionSubmission} target="_blank">{secondSectionSubmission}</a></h4>
              <div className="inputWrapper">
                <input
                  type="text"
                  placeholder="Masukkan link submission"
                  value={get(this.state.taskInput, task.id, '')}
                  onChange={this.handleTaskInputChange(task.id)}
                />
                <button
                  onClick={this.handleTaskSubmit(
                    global.user.user_profile.second_section.id,
                    task.id
                  )}
                >
                  Submit Tugas
                </button>
              </div>
            </Task>
          );
        })}
      </Wrapper>
    );
  }
}

Dashboard.propTypes = {
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
  margin-bottom: 2rem;

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

const Task = styled.div`
  width: 100%;
  margin: 2rem 0 0;
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color[props.background]};
  color: ${(props) => props.theme.color[props.color]};

  h1,
  h4 {
    line-height: 1;
    margin: 0 0 1rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
  }

  h4 {
    font-size: 1rem;
    font-weight: 400;

    a {
      color: ${(props) => props.theme.color[props.color]};
    }
  }

  .inputWrapper {
    background: ${(props) => props.theme.color.pure};
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(62, 73, 94, 0.25);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    input {
      padding: 0 2rem;
      color: ${(props) => props.theme.color.dark};
      background: ${(props) => props.theme.color.pure};
      border-radius: 0.5rem;
      flex: 1;

      ${media('mobile')} {
        flex: none;
        width: 100%;
        padding: 0.75rem 1.5rem;
      }
    }

    button {
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
      background: ${(props) => props.theme.color[props.accent]};
      transition: 0.25s ease all;

      &:hover,
      &:focus {
        opacity: 0.85;
        outline: none;
      }

      ${media('mobile')} {
        width: 100%;
        font-size: 1rem;
        padding: 0.75rem 1.5rem;
      }
    }
  }
`;

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setUser: (user) => dispatch(setUser(user)),
    push: (url) => dispatch(push(url)),
    submitTask: (target) => dispatch(submitTask(target)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(withReducer, withSaga, withConnect)(Dashboard);
