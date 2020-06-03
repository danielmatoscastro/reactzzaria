import styled from 'styled-components/macro';

export const ContentFooter = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify ?? 'flex-end'};
`;

export default ContentFooter;
