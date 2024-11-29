import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Styled Components
export const HeaderContainer = styled.header`
  background-color: #e1fa02;
  color: #000000;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  img {
    height: 60px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 0px;
    list-style: none;
    margin: 0;
    padding: 0;

  

    li a {
      text-decoration: none;
      color: #000000;
      font-weight: bold;
      font-size: 23px;

      &:hover {
        color: #ffffff;
      }
    }
  }
`;
