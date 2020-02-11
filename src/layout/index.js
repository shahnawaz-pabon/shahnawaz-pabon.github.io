import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import config from '../data/config';
import '../styles/global.css';
import { Helmet } from 'react-helmet';
import favicon from '../../static/assets/favicon.png';

import StyleSwitch from '../components/StyleSwitch';


// import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faBloggerB, faGithubAlt, faStackOverflow, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

const Layout = ({ children }) => {

  let localIsDark;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('isDark') === 'false') {
      localIsDark = false;
    } else {
      localIsDark = true;
    }
    // console.log(localIsDark ? 'dark mode' : 'light mode');
  }

  const [isDark, setIsDark] = useState(localIsDark);

  // library.add(faPlus);

  return (
    
    <>
      <Helmet
          bodyAttributes={{
            class: `${isDark ? 'dark': ''}`,
          }}
      >
        <meta name="description" content={config.siteDescription} />
        <link rel="icon"  type="image/png" href={favicon} />
      </Helmet>
      <NavigationBar menuLinks={config.menuLinks} isDark={isDark} />
      <div id="content-wrapper">{children}</div>
      <div className="toggle-bulb-icon">
        <StyleSwitch isDark={isDark} setIsDark={setIsDark}/>
      </div>
      <div>
        <Fab
          mainButtonStyles={{
            backgroundColor: '#00b5ad',
            width: 48,
            height: 48,
            bottom: 90,
            right: 20,
            position: 'fixed'
          }}
          actionButtonStyles={{

          }}
          position={{
            bottom: 120,
            right: -10,
          }}
          icon={<FontAwesomeIcon icon={faPlus} color="#ddd" />}
          event="hover"
          key={-1}
          alwaysShowTitle={false}
          onClick={() => alert('Here is the action of FAB.')}
          text="TextForFAB"
        >
          {/* // The Action components are the "buttons" that appear when the Fab is open. You can use the out-of-the-box Action 
          // component or you can use a custom component of any type and style it any way that you'd like. The "text" prop
          // is the popup label that appears when the Action component is hovered. */}
          <Action
            text=""
            onClick={()=>{
              console.log("Email Clicked...");
            }}
            
          >
            <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
          </Action>

          <Action
              text=""
              onClick={()=>{
                console.log("Help Clicked...");
              }}
            >
            <FontAwesomeIcon icon={faFacebookF} size='2x' />
          </Action>
        </Fab>
      </div>
    </>
    
  )
  
}

export default Layout