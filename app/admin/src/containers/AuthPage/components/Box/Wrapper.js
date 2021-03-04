import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: auto;
    width: 41.6rem;
    padding: 20px 30px 25px 30px;
    border-radius: ${theme.main.sizes.borderRadius};
    border-top: 2px solid ${theme.main.colors.won.orange};
    background-color: ${theme.main.colors.white};
    box-shadow: 0 2px 4px 0 ${theme.main.colors.darkGrey};
  `}
`;

export default Wrapper;
