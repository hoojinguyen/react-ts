import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts';
// load app SCSS styles
import './styles/App.scss';

const ReactApp: React.FC = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default ReactApp;
