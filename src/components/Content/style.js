import styled from 'styled-components/macro';

const Content = styled.main`
  padding: ${({ theme }) => theme.spacing(12, 5, 10)};
  flex-grow: 1;
`;

export default Content;
