import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import App from './pages/home/Index';
import Survey from './pages/Survey';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import {ThemeProvider} from './utils/Context';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./utils/style/GlobalStyle"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider>
          <GlobalStyle/>
          <Header />
            <Routes>
              <Route exact  path='/' Component={App}/>
              <Route exact  path='/Survey/:questionNumber' Component={Survey}/>
              <Route exact  path='/results' Component={Results}/>
              <Route exact  path='/freelances' Component={Freelances}/>
              <Route path='*' Component={Error} />
            </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
