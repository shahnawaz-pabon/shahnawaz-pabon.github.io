import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import config from '../data/config';
import '../styles/global.css';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from 'styled-components';

import ThemeLight from '../themes/ThemeLight';
import ThemeDark from '../themes/ThemeDark';

import StyleSwitch from '../components/StyleSwitch';

const Layout = ({ children }) => {

  let localIsDark;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('isDark') === 'false') {
      localIsDark = false;
    } else {
      localIsDark = true;
    }
    console.log(localIsDark ? 'dark mode' : 'light mode');
  }

  const [isDark, setIsDark] = useState(localIsDark);

  return (
    
      <ThemeProvider theme={isDark ? ThemeDark : ThemeLight}>
        <Helmet
            bodyAttributes={{
              class: `${isDark ? 'dark': ''}`,
            }}
        >
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <NavigationBar menuLinks={config.menuLinks} isDark={isDark} />
        <div id="content-wrapper">{children}</div>
        <div className="toggle-bulb-icon">
          <StyleSwitch isDark={isDark} setIsDark={setIsDark}/>
        </div>
      </ThemeProvider>
    

  )
  
}

export default Layout