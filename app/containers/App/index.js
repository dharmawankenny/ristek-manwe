/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import AppleIcon from 'images/apple-touch-icon.png';
import Favicon32 from 'images/favicon-32x32.png';
import Favicon16 from 'images/favicon-16x16.png';
import MaskIcon from 'images/safari-pinned-tab.svg';

import { media } from 'common/theme';
import Sitemap from 'common/routing';

import Footer from 'components/Footer';

import Dashboard from 'containers/Dashboard/Loadable';
import Encyclopedia from 'containers/Encyclopedia/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Register from 'containers/Register/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <Main>
      <Helmet
        titleTemplate="%s - Oprec Anggota Ristek Fasilkom UI 2018"
        defaultTitle="Open Recruitment Anggota Ristek Fasilkom UI 2018"
        meta={[
          { name: 'description', content: 'Open Recruitment Anggota Ristek Fasilkom UI 2018 Telah Dibuka!' },
          { name: 'apple-mobile-web-app-title', content: 'Oprec Ristek 2018' },
          { name: 'application-name', content: 'Oprec Ristek 2018' },
          { name: 'theme-color', content: '#4197D2' },
        ]}
        link={[
          { rel: 'apple-touch-icon', sizes: '180x180', href: `${AppleIcon}?v=rst18` },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${Favicon32}?v=rst18` },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${Favicon16}?v=rst18` },
          { rel: 'mask-icon', color: '4197D2', href: `${MaskIcon}?v=rst18` },
          { rel: 'shortcut icon', href: 'favicon.ico?v=rst18' },
        ]}
      />
      <div className="content">
        <Switch>
          <Route exact path={Sitemap.index} component={HomePage} />
          <Route exact path={Sitemap.encyclopedia} component={Encyclopedia} />
          <Route exact path={Sitemap.register} component={Register} />
          <Route exact path={Sitemap.dashboard} component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.color.white};

  .content {
    margin: 0 auto;
    width: 100%;
    max-width: ${(props) => props.theme.maxWidth};
    min-height: calc(100vh - 5rem);

    ${media('mobile')} {
      min-height: 100vh;
    }
  }
`;
