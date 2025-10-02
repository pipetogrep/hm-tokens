import React from 'react';
import { ConfigProvider, Button, Typography } from 'antd';
import customTheme from './theme';
import Tokens from './Tokens';

const { Title, Paragraph } = Typography;

const App = () => (
  <ConfigProvider theme={customTheme}>
    <div className="App">
    <Tokens />
    </div>
  </ConfigProvider>
);

export default App;
