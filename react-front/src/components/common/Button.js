import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import palette from '../../lib/styles/palette';

const sizes = {
    desktop: 1024,
    tablet: 512
};

const buttonStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;
  
  background: ${palette.gray[2]};
  &:hover {
    background: ${palette.gray[5]};
  }

  ${props =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;


const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0}/>
    ) : (
        <StyledButton {...props} />
    );
};

export default Button;