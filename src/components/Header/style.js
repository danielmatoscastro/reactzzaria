import styled from 'styled-components/macro';
import { Toolbar as MaterialToolbar } from '@material-ui/core';

export const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`;

export default Toolbar;
