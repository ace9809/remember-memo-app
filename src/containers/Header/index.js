/**
 * Created by Ace on 2018. 10. 14..
 */
import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTags } from 'react-icons/fa'
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

const NavWrapper = styled.div`
  margin-right: 40px;
  display: flex;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ColorFaEdit = styled(FaEdit)`
  color: black;
  width: 30px;
  height: 50px;
  margin-right: 30px;
`;

const ColorTags = styled(FaTags)`
  color: black;
  width: 30px;
  height: 40px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={HeaderLogo} height='50px' />
      </LogoWrapper>
      <NavWrapper>
        <IconWrapper>
          <ColorFaEdit />
        </IconWrapper>
        <IconWrapper>
          <ColorTags />
        </IconWrapper>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header;