import styled, { css } from 'styled-components';
import { Button as Base } from '@buffetjs/core';

const Button = styled(Base)`
  ${({ theme }) => css`
    width: 100%;
    text-transform: ${({ textTransform }) => textTransform};
    &.btn-won{
      background: ${theme.main.colors.won.orange};
      border: 1px solid ${theme.main.colors.won.orange};
    }
  `}
`;

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  textTransform: 'none',
};

export default Button;
