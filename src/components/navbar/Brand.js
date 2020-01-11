import React from 'react';
import styled from "styled-components";

import logo from "../../../static/logos/book-reader.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Shahnawaz Hossan" />
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;