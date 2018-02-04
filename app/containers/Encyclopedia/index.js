/**
 *
 * Encyclopedia
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getServerTime } from 'global-actions';
import makeSelectGlobal from 'global-selectors';

import Papa from 'images/paparistek.png';

import Sitemap from 'common/routing';
import { media } from 'common/theme';

import EncyclopediaAccordion from 'components/EncyclopediaAccordion';

export class Encyclopedia extends React.Component {
  static PROCEDURAL = [
    {
      title: 'Prosedur Open Recruitment',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Persyaratan Anggota Ristek Fasilkom UI 2018',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
  ];

  static DIVISIONS = [
    {
      title: 'Human Resource',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Public Relation',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Project Management',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Digitan Product Development SIG',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Game Development SIG',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Mobile Development SIG',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Web Development SIG',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Competitive Programming SIG',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Data Science SIG',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Embedded System SIG',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
    {
      title: 'Network Security & Operating Systems SIG',
      content: 'Malesuada hendrerit a litora ultrices vitae libero in enim scelerisque scelerisque sagittis facilisi adipiscing ipsum dui purus orci dictumst nullam quis laoreet magna a vel. A ullamcorper a lorem diam orci vestibulum id nisi quis eros ullamcorper elementum fermentum a non tincidunt scelerisque dui vel a dui vestibulum. Augue vestibulum nascetur pharetra inceptos libero non in turpis ad condimentum elit condimentum pulvinar adipiscing vestibulum velit tortor a suspendisse senectus a nec neque eu turpis habitasse ante. Sapien curae pulvinar id magna egestas fringilla penatibus parturient condimentum natoque in mauris fusce parturient auctor nam quam parturient a diam urna dolor metus lacinia vestibulum dui sociosqu nullam. Consequat vestibulum vestibulum maecenas eros primis lectus ante molestie dapibus himenaeos viverra class natoque natoque felis dui potenti a vestibulum a aliquet nisl magnis eu a. Euismod at ligula fringilla at a cum facilisi vestibulum blandit duis ligula consectetur nibh dictumst scelerisque parturient diam integer a ante a adipiscing rhoncus ante curabitur eu orci. Taciti integer suspendisse scelerisque scelerisque euismod pharetra mus accumsan justo et vestibulum a parturient hac eu enim.<br />Consequat ad nascetur tristique sodales erat parturient sem praesent a ligula tristique adipiscing a ornare.Parturient justo gravida dictumst eu adipiscing a eu vestibulum.',
    },
  ];

  componentDidMount() {
    if (!this.props.global.loading && !this.props.global.success && !this.props.global.serverTime) {
      this.props.dispatch(getServerTime());
    }
  }

  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Encyclopedia</title>
          <meta name="description" content="Ensiklopedia Open Recruitment Ristek Fasilkom UI 2018, daftar sekarang juga!" />
        </Helmet>
        <Heading>
          <img className="mobile" src={Papa} alt="papa" />
          <h1>
            Ensiklopedia<br />
            <Link to={Sitemap.index}>Kembali</Link>
          </h1>
          <img className="desktop" src={Papa} alt="papa" />
        </Heading>
        <Context>Prosedur & Persyaratan</Context>
        {Encyclopedia.PROCEDURAL.map((procedure) =>
          <EncyclopediaAccordion item={procedure} />)}
        <Context>Divisi</Context>
        {Encyclopedia.DIVISIONS.map((division) =>
          <EncyclopediaAccordion item={division} />)}
      </Wrapper>
    );
  }
}

Encyclopedia.propTypes = {
  global: PropTypes.object.isRequired,
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

    a {
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

const Context = styled.h3`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  line-height: 1;
  margin: 4rem 0 1.5rem;
  color: ${(props) => props.theme.color.gray};
`;

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Encyclopedia);
