import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import config from '../data/config';
import '../styles/global.css';
import { Helmet } from 'react-helmet';

import StyleSwitch from '../components/StyleSwitch';
import Footer from '../components/Footer';


// import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faBloggerB, faGithubAlt, faStackOverflow, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faTag } from '@fortawesome/free-solid-svg-icons';
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
          class: `${isDark ? 'dark' : ''}`,
        }}
      >
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>

      {/* NavigationBar */}
      <NavigationBar menuLinks={config.menuLinks} isDark={isDark} />
      {/* NavigationBar Ends*/}


      {/* Contents */}
      <div id="content-wrapper">{children}</div>
      {/* Contents */}

      {/* Toggle Dark Mode Button */}
      <div className="toggle-bulb-icon">
        <StyleSwitch isDark={isDark} setIsDark={setIsDark} />
      </div>
      {/* Toggle Dark Mode Button Ends*/}


      {/* Fab Buttons for my profiles */}
      <div>
        <Fab
          mainButtonStyles={{
            backgroundColor: '#1abc9c',
            width: 48,
            height: 48,
            bottom: 90,
            right: 20,
            position: 'fixed'
          }}
          actionButtonStyles={{
            right: -300
          }}
          position={{
            bottom: 120,
            right: -10
          }}
          icon={<FontAwesomeIcon icon={faPlus} color="#ddd" />}
          event="hover"
          key={-1}
          alwaysShowTitle={false}
        >

          <Action
            text="My Facebook"
            onClick={() => {
              window.open('https://www.facebook.com/shahnawazpabon', '_blank');
            }}
            style={{
              backgroundColor: '#2980b9'
            }}
          >
            <FontAwesomeIcon icon={faFacebookF} size='lg' />
          </Action>

          <Action
            text="My Programming Blog in Bengali"
            onClick={() => {
              window.open('http://pabonsec.blogspot.com/', '_blank');
            }}
            style={{
              backgroundColor: '#e95950',
              color: '#fff'
            }}
          >
            <FontAwesomeIcon icon={faBloggerB} size='lg' />
          </Action>

          <Action
            text="Me on LinkedIn"
            onClick={() => {
              window.open('https://www.linkedin.com/in/backtoschool/', '_blank');
            }}
            style={{
              backgroundColor: '#007bb6',
              color: '#fff'
            }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
          </Action>

          <Action
            text="Me On StackOverflow"
            onClick={() => {
              window.open('https://stackoverflow.com/users/6174271/pabon-sec?tab=profile', '_blank');
            }}
            style={{
              backgroundColor: '#fff',
              color: '#e95950'
            }}
          >
            <FontAwesomeIcon icon={faStackOverflow} size='lg' />
          </Action>

          <Action
            text="Me on GitHub"
            onClick={() => {
              window.open('https://github.com/PabonSEC', '_blank');
            }}
            style={{
              backgroundColor: '#fff',
              color: '#2c3e50'
            }}
          >
            <FontAwesomeIcon icon={faGithubAlt} size='lg' />
          </Action>
        </Fab>
      </div>
      {/* End of Fab Buttons for my profiles */}

      <Footer />
    </>

  )

}

export default Layout