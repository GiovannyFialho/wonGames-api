import styled, { css } from 'styled-components';

const A = styled.a`
${({ theme }) => css`
  display: flex;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 0.2rem;
  padding-left: 1.6rem;
  min-height: 3.6rem;
  line-height: 1.8rem;
  border-left: 0.3rem solid transparent;
  cursor: pointer;
  color: ${theme.main.colors.leftMenu['link-color']};
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  &:hover {
    background: ${theme.main.colors.won.blue};
    border-left: 0.3rem solid ${theme.main.colors.won.orange};
    text-decoration: none;
    color: ${theme.main.colors.white};
    span{
      color: ${theme.main.colors.white};
    }
  }
  &:focus {
    color: ${theme.main.colors.white};
    text-decoration: none;
    span{
      color: ${theme.main.colors.white};
    }
  }
  &:visited {
    color: ${theme.main.colors.leftMenu['link-color']};
    span{
      color: ${theme.main.colors.white};
    }
  }
  &.linkActive {
    color: white !important;
    border-left: 0.3rem solid ${theme.main.colors.won.orange};
    span{
      color: ${theme.main.colors.white};
    }
  }
`}
`;

export default A;
