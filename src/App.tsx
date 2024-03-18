import React from 'react';
import {StatusBar} from 'react-native';

import Profile from './screens/Profile';
import {ToastProvider} from './components/Toast';

const App: React.FC = () => {
  return (
    <ToastProvider position="top">
      <Profile />
      <StatusBar barStyle="default" />
    </ToastProvider>
  );
};

export default App;
