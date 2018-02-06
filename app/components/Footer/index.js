/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

import { media } from 'common/theme';

function Footer(props) {
  return (
    <Foot>
      <div className="borders blue" />
      <div className="borders dark" />
      <div className="borders yellow" />
      <div className="wrapper">
        <LogoSet>
          <img src={props.logo} alt="Logo" />
          <div className="logoText">
            <h2><span className="blue">Riset</span> & <span className="yellow">Teknologi</span></h2>
            <h3>Fasilkom UI 2018</h3>
          </div>
        </LogoSet>
        <h1>#Catalyzed</h1>
        <SocialSet>
          <div className="socialText">
            <a href="http://ristek.cs.ui.ac.id/" target="_blank">ristek.cs.ui.ac.id</a>
            <a href="https://fb.me/RistekCSUI/" target="_blank">fb.me/RistekCSUI/</a>
            <a href="https://twitter.com/RistekCSUI" target="_blank">@RistekCSUI</a>
          </div>
          <a href="https://line.me/R/ti/p/UGlp3KFY5i" target="_blank"><img src={props.barcode} alt="OA Line" /></a>
        </SocialSet>
      </div>
    </Foot>
  );
}

const Foot = styled.div`
  width: 100%;
  position: relative;
  color: ${(props) => props.theme.color.dark};

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
    padding: 0 2rem;
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
      line-height: 1;
    }

    h1 {
      flex: 1;
      font-size: 2rem;
      font-weight: 700;
      text-align: center;

      ${media('mobile')} {
        flex: none;
        width: 100%;
        margin: 2rem 0;
      }
    }

    ${media('mobile')} {
      height: auto;
      padding: 2rem;
    }
  }
`;

const LogoSet = styled.div`
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

  img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
    object-fit: contain;

    ${media('mobile')} {
      width: 5rem;
      height: 5rem;
      margin: 0 0 1rem;
    }
  }

  .logoText {
    flex: 1;

    h2,
    h3 {
      width: 100%;
      text-align: left;

      ${media('mobile')} {
        text-align: center;
      }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 0;

      .blue {
        color: ${(props) => props.theme.color.blue};
      }

      .yellow {
        color: ${(props) => props.theme.color.yellow};
      }
    }

    h3 {
      font-size: 1rem;
      font-weight: 700;
    }

    ${media('mobile')} {
      flex: none;
      width: 100%;
    }
  }
`;

const SocialSet = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;

  ${media('mobile')} {
    flex: none;
    width: 100%;
    justify-content: center;
  }

  a {
    line-height: 1;

    img {
      width: 3rem;
      height: 3rem;
      margin-left: 0.5rem;
      object-fit: contain;

      ${media('mobile')} {
        margin: 1rem 0 0;
      }
    }
  }

  .socialText {
    flex: 1;

    a {
      display: block;
      width: 100%;
      font-size: 0.75rem;
      margin: 0.25rem 0 0;
      font-weight: 700;
      text-align: right;
      text-decoration: none;
      color: ${(props) => props.theme.color.dark};

      &:first-of-type {
        margin: 0;
      }

      ${media('mobile')} {
        text-align: center;
      }
    }

    ${media('mobile')} {
      flex: none;
      width: 100%;
    }
  }
`;

export default Footer;
