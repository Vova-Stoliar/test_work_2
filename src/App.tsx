/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import './App.scss';

import { dataFromServer } from './api/api';

export const App: React.FC = () => {
  return (
    <div>
      Vovam
    </div>
  );
};

dataFromServer();
