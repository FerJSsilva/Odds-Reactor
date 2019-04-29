import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Layout } from 'antd';

import Header from '../layout/headerComponent/HeaderComponent';
import Footer from '../layout/footerComponent/FooterComponent';
import Sidebar from '../layout/sidebarComponent/SidebarComponent';

import Home from './home/Home';
import Sample from './sample/Sample';
import NotFound from './notFound/NotFound';

import '../assets/styles/styles.css';

const { Content } = Layout;

const Main = () => (
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ margin: '16px 16px 0 16px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sample" component={Sample} />
            <Route component={NotFound} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  </Router>
);

export default Main;
