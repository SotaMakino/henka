import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowTitle, KonaTitle, PlaTitle } from '../constants/Images';

const Top = () => {
  return (
    <Wrapper>
      <ImageWrapper to="/row">
        <Image src={RowTitle} />
      </ImageWrapper>
      <ImageWrapper to="/kona">
        <Image src={KonaTitle} />
      </ImageWrapper>
      <ImageWrapper to="/pla">
        <Image src={PlaTitle} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
`;
const ImageWrapper = styled(Link)`
  height: 33%;
`;
const Image = styled.img`
  width: 60%;
`;

export default Top;
