import React, { useContext } from 'react';

import './StyleSwitch.css';

import styled, { ThemeContext } from 'styled-components';

const Icon = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const StyleSwitch = ({ isDark, setIsDark }) => {
  const themeContext = useContext(ThemeContext);

  function handleClick() {
    localStorage.setItem('isDark', !isDark);
    setIsDark(!isDark);
  }

  return <Icon src={themeContext.icon} onClick={handleClick} />;
};

export default StyleSwitch;