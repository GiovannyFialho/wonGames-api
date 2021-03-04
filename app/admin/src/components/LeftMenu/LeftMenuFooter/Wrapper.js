import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    background: ${theme.main.colors.won.blue};
    bottom: 0;
    .poweredBy {
      display: flex;
      p{
        line-height: 3rem;
        font-size: 1.1rem;
        font-weight: 400;
        letter-spacing: 0.05rem;
        vertical-align: middle;
        color: #fff;
        margin: 0;
        padding-left: 10px;
        a{
          color: ${theme.main.colors.won.pink};
          padding-left: 8px;
        }
      }
    }
  `}
`;

export default Wrapper;
