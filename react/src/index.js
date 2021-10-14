import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from "./context/Context"

import Amplify, { Auth } from 'aws-amplify';
import config from './config';



Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
})

ReactDOM.render(
  <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
