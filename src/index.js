import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShoppingIndex } from './compononent/ShoppingIndex';
import { CookiesProvider } from 'react-cookie';
import { HdfcIndex } from './HDFCBANK/Hdfcindex';
import { HooksDemoComponent } from './compononent/HooksDemoComponent';
import { ContextDemoComponent } from './compononent/ContextDemoComponent';
import { ReducerDemoComponent } from './compononent/ReducerDemoComponent';
import { CustomHookDemo } from './compononent/CustomHookDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
   <CookiesProvider>
   {/* <ShoppingIndex/> */}
   <HdfcIndex/>
   {/* <HooksDemoComponent/> */}
   {/* <ContextDemoComponent/> */}
   {/* <ReducerDemoComponent/> */}
   {/* <CustomHookDemo/> */}
   </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
