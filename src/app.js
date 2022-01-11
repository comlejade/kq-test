import React from 'react';
import './app.css';
import { ConfigProvider } from '@kqinfo/ui'

const App = props => {
  return <ConfigProvider brandPrimary={'#2780d9'}>{props.children}</ConfigProvider>
};

export default App;
