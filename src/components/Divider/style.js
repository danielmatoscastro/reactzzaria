import styled from 'styled-components/macro';
import { Divider } from '@material-ui/core';

const StyledDivider = styled(Divider)`
  margin: ${({ theme }) => theme.spacing(3, 0)};
  width: 100%;
`;

export default StyledDivider;
