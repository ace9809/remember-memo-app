/**
 * Created by Ace on 2018. 10. 14..
 */
import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../assets/headerLogo.png';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 77px;
  border-bottom: 1px solid #F3F1F1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={HeaderLogo} height='50px' />
      </LogoWrapper>
    </HeaderWrapper>
  )
}

export default Header;