import React from 'react';
import './assets/styles/reset.css';
import './assets/styles/styles-global.css'

import Layout from "./components/Layout"
import Card from './components/Card'

const App = () => {
  return (
    <Layout>
      <input type="search" name="search" placeholder="Type your search..." />
      <Card />
    </Layout>
  )
};

export default App